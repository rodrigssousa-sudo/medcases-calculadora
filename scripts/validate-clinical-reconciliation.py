#!/usr/bin/env python3
from pathlib import Path
from collections import Counter
import argparse,json
def fail(x): print("CLINICAL_IDENTITY_RECONCILIATION_VALIDATION=FAIL:"+x); raise SystemExit(1)
def load(p): return json.loads(Path(p).read_text(encoding="utf-8"))
def main():
    ap=argparse.ArgumentParser(); ap.add_argument("--root",default="data/clinical-knowledge"); a=ap.parse_args(); root=Path(a.root)
    draft=load(root/"canonical/protocol-manifest.draft.json")
    idx=load(root/"canonical/identity-index.draft.json")
    domains=load(root/"review/identity-domains.v1.json")
    classes=load(root/"review/incoming-classification.v1.json")
    legacy=load(root/"review/legacy-owner-relations.v1.json")
    pop=load(root/"review/population-subtype-reconciliation.v1.json")
    summary=load(root/"review/reconciliation-summary.v1.json")
    manifest=load(root/"manifest.json")
    incoming={x["sourceRecordId"] for x in draft["incomingCandidates"]}; owners={x["protocolId"] for x in draft["legacyCanonicalOwners"]}
    subtype_ids={x["sourceRecordId"] for x in draft["populationSubtypeCandidates"]}
    rows=classes["items"]; ids=[x["sourceRecordId"] for x in rows]
    if len(rows)!=168 or set(ids)!=incoming or len(ids)!=len(set(ids)): fail("INCOMING_COVERAGE")
    if any(x["canonicalProtocolId"] is not None for x in rows): fail("AUTO_CANONICAL_ID")
    if any(x["publishable"] is not False or x["esStatus"]!="required" for x in rows): fail("PUBLISH_OR_ES_GATE")
    counts=Counter(x["classification"] for x in rows)
    expected={"IDENTITY_DOMAIN_REVIEW":96,"REFERENCE_MODULE":15,"THERAPEUTIC_STRATEGY_MODULE":1,
              "MULTI_ENTITY_SOURCE_REVIEW":1,"ADJUNCT_THERAPY_MODULE":1,"NEW_SINGLE_SOURCE_CANDIDATE":54}
    if dict(counts)!=expected: fail("COUNTS:"+str(dict(counts)))
    ds=domains["domains"]
    if len(ds)!=62 or len({x["clusterId"] for x in ds})!=62: fail("DOMAIN_COUNT")
    if any(x["canonicalProtocolId"] is not None or x["automaticMerge"] is not False for x in ds): fail("DOMAIN_AUTO_ACTION")
    if any(oid not in owners for x in ds for oid in x["legacyOwnerIds"]): fail("UNKNOWN_OWNER")
    if len(legacy["groups"])!=17: fail("LEGACY_GROUP_COUNT")
    hyper=[g for g in legacy["groups"] if g["groupId"]=="legacy_hyperkalemia_duplicate_priority"]
    if len(hyper)!=1 or set(hyper[0]["ownerIds"])!={"hiperpotassemia_grave","hipercalemia_grave"}: fail("HYPERKALEMIA_RELATION")
    prows=pop["items"]
    if len(prows)!=5 or {x["sourceRecordId"] for x in prows}!=subtype_ids: fail("GESTANTE_COVERAGE")
    if any(x["canonicalProtocolId"] is not None or x["typedRegimenId"] is not None for x in prows): fail("GESTANTE_AUTO_ASSIGN")
    dor=next(x for x in prows if x["sourceRecordId"]=="pdf-emergency-2026:gestante:dor")
    if dor["identityClusterId"] is not None: fail("GENERIC_DOR_MUST_REMAIN_UNRESOLVED")
    asma=next(x for x in rows if x["sourceRecordId"]=="pdf-ps-adult:04")
    insomnia=next(x for x in rows if x["sourceRecordId"]=="pdf-ps-adult:36")
    if asma["identityClusterId"]!="asthma" or insomnia["identityClusterId"] is not None: fail("GENERIC_ALIAS_FALSE_POSITIVE")
    if idx["identityDomainCount"]!=62 or idx["canonicalAssignmentEnabled"] is not False: fail("IDENTITY_INDEX")
    if summary["incomingTotal"]!=168 or summary["canonicalProtocolIdsAssigned"]!=0: fail("SUMMARY")
    if manifest["productionIntegrationEnabled"] is not False or manifest["publicationEnabled"] is not False: fail("PRODUCTION_FLAG")
    if list((root/"canonical/protocols").glob("*.json")) or list((root/"canonical/regimens").glob("*.json")): fail("EARLY_CANONICAL_FILES")
    print("CLINICAL_IDENTITY_RECONCILIATION_VALIDATION=PASS")
    print("INCOMING_CLASSIFIED=168")
    print("IDENTITY_DOMAIN_REVIEW=96")
    print("REFERENCE_MODULES=15")
    print("STRUCTURAL_SPECIAL_REVIEW=3")
    print("NEW_SINGLE_SOURCE_CANDIDATES=54")
    print("IDENTITY_DOMAINS=62")
    print("LEGACY_RELATION_GROUPS=17")
    print("GESTANTE_POINTERS_CLASSIFIED=5")
    print("CANONICAL_PROTOCOL_IDS_ASSIGNED=0")
    print("PRODUCTION_INTEGRATION_ENABLED=false")
if __name__=="__main__": main()
