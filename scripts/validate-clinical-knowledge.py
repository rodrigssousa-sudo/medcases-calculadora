#!/usr/bin/env python3
from pathlib import Path
from collections import Counter
import argparse
import hashlib
import json
import re
import sys

def sha_file(path: Path) -> str:
    h=hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda:f.read(1024*1024),b""):
            h.update(chunk)
    return h.hexdigest()

def fail(message: str) -> None:
    print(f"CLINICAL_KNOWLEDGE_VALIDATION=FAIL:{message}")
    raise SystemExit(1)

def load(path: Path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        fail(f"INVALID_JSON:{path}:{type(exc).__name__}")

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument("--root", default="data/clinical-knowledge")
    parser.add_argument("--calculator-manifest", default="data/manifest.json")
    args=parser.parse_args()

    root=Path(args.root)
    if not root.is_dir():
        fail("ROOT_MISSING")

    manifest=load(root/"manifest.json")
    registry=load(root/"source-registry.json")
    draft=load(root/"canonical/protocol-manifest.draft.json")
    localization=load(root/"policies/localization.json")
    canonicalization=load(root/"policies/canonicalization.json")

    if manifest.get("schemaVersion")!="medcases-clinical-knowledge-foundation-v1":
        fail("MANIFEST_SCHEMA")
    if manifest.get("status")!="shadow_foundation":
        fail("FOUNDATION_STATUS")
    if manifest.get("productionIntegrationEnabled") is not False:
        fail("PRODUCTION_INTEGRATION_MUST_BE_FALSE")
    if manifest.get("publicationEnabled") is not False:
        fail("PUBLICATION_MUST_BE_FALSE")
    safety=manifest.get("safety") or {}
    if safety.get("semanticAuditDecisionsImported") is not False:
        fail("SEMANTIC_DECISIONS_MUST_NOT_BE_IMPORTED")
    created=manifest.get("createdFrom") or {}
    if created.get("exactNormalizationArchiveSha256") != "3ce18eab32fe402e023a21c5d6da1f15bf68de0962f2a9a7f5e40ace2fcf1ed2":
        fail("EXACT_NORMALIZATION_ARCHIVE_PROVENANCE")

    inv=manifest.get("inventory") or {}
    expected={
        "currentProtocols":123,
        "pdfEmergencyTopLevelEntries":111,
        "pdfPsAdultEntries":57,
        "incomingTopLevelEntries":168,
        "gestanteSubtypePointers":5,
        "totalTopLevelSourceRecords":291,
        "totalSourceArtifacts":296,
        "legacyCanonicalOwners":123,
        "canonicalProtocolFiles":0,
        "typedRegimenFiles":0,
        "prescriptionTemplateFiles":0,
    }
    for key,value in expected.items():
        if inv.get(key)!=value:
            fail(f"INVENTORY_{key}:{inv.get(key)}!= {value}")

    if localization.get("requiredLocales")!=["pt","es"]:
        fail("LOCALIZATION_REQUIRED_LOCALES")
    if localization.get("numericRegimenLocaleIndependent") is not True:
        fail("NUMERIC_REGIMEN_MUST_BE_LOCALE_INDEPENDENT")
    if localization.get("incomingPortugueseSourceIsPublishableWithoutSpanish") is not False:
        fail("PT_SOURCE_CANNOT_PUBLISH_WITHOUT_ES")

    principles=canonicalization.get("principles") or {}
    if principles.get("fuzzySimilarityCanDeleteMergeOrOverwrite") is not False:
        fail("FUZZY_MUTATION_POLICY")
    if principles.get("currentProtocolMayBeOverwrittenAutomatically") is not False:
        fail("CURRENT_OVERWRITE_POLICY")

    forbidden=set(canonicalization.get("genericAliasTokensForbiddenAsStandaloneEntityAliases") or [])
    if "moderada" not in forbidden or "leve" not in forbidden or "aguda" not in forbidden:
        fail("GENERIC_ALIAS_POLICY_INCOMPLETE")

    sources=registry.get("sources") or []
    by_id={x.get("sourceId"):x for x in sources}
    for source_id,count in [
        ("current-medcases",123),
        ("pdf-emergency-2026",111),
        ("pdf-ps-adult",57),
        ("pdf-emergency-2026-gestante-subtypes",5),
    ]:
        if source_id not in by_id:
            fail(f"SOURCE_REGISTRY_MISSING:{source_id}")
        if by_id[source_id].get("recordCount")!=count:
            fail(f"SOURCE_REGISTRY_COUNT:{source_id}")

    groups=[
        ("sources/current-medcases",123,"pt+es"),
        ("sources/pdf-emergency-2026",111,"pt"),
        ("sources/pdf-ps-adult",57,"pt"),
        ("sources/pdf-emergency-2026-gestante",5,"pt"),
    ]
    all_source_ids=[]
    for rel,count,locale in groups:
        files=sorted((root/rel).glob("*.json"))
        if len(files)!=count:
            fail(f"SOURCE_FILE_COUNT:{rel}:{len(files)}!={count}")
        for path in files:
            obj=load(path)
            if obj.get("schemaVersion")!="medcases-source-record-v1":
                fail(f"SOURCE_SCHEMA:{path}")
            sid=obj.get("sourceRecordId")
            if not isinstance(sid,str) or not sid:
                fail(f"SOURCE_ID:{path}")
            all_source_ids.append(sid)
            if obj.get("sourceLocale")!=locale:
                fail(f"SOURCE_LOCALE:{path}")
            title=obj.get("title") or {}
            if not title.get("pt"):
                fail(f"PT_TITLE_MISSING:{path}")
            review=obj.get("review") or {}
            if review.get("publishableFromClinicalKnowledgeBundle") is not False:
                fail(f"SOURCE_PUBLISHABLE_MUST_BE_FALSE:{path}")
            if locale=="pt":
                if title.get("es") is not None:
                    fail(f"INCOMING_ES_MUST_REMAIN_NULL_BEFORE_REVIEW:{path}")
                loc=obj.get("localization") or {}
                if loc.get("es")!="required_before_publication":
                    fail(f"INCOMING_ES_GATE:{path}")
            else:
                if not title.get("es"):
                    fail(f"CURRENT_ES_TITLE_MISSING:{path}")

    if len(all_source_ids)!=len(set(all_source_ids)):
        fail("DUPLICATE_SOURCE_RECORD_IDS")

    if draft.get("status")!="shadow_review_only":
        fail("DRAFT_STATUS")
    if draft.get("productionIntegrationEnabled") is not False:
        fail("DRAFT_PRODUCTION_FLAG")
    if draft.get("publicationEnabled") is not False:
        fail("DRAFT_PUBLICATION_FLAG")

    owners=draft.get("legacyCanonicalOwners") or []
    incoming=draft.get("incomingCandidates") or []
    subtypes=draft.get("populationSubtypeCandidates") or []
    if len(owners)!=123:
        fail("DRAFT_OWNER_COUNT")
    if len({x.get("protocolId") for x in owners})!=123:
        fail("DRAFT_OWNER_ID_UNIQUENESS")
    if len(incoming)!=168:
        fail("DRAFT_INCOMING_COUNT")
    if len(subtypes)!=5:
        fail("DRAFT_SUBTYPE_COUNT")
    for item in incoming+subtypes:
        if item.get("canonicalProtocolId") is not None:
            fail("INCOMING_CANONICAL_ID_MUST_BE_UNASSIGNED")
        if item.get("esStatus")!="required":
            fail("INCOMING_ES_STATUS")

    # Exact source artifacts from R2 must be present and parseable.
    artifacts=[
        "sources/artifacts/pdf-emergency-2026.pages.json",
        "sources/artifacts/pdf-ps-adult.pages.json",
        "sources/inventories/current-exact.json",
        "sources/inventories/pdf-emergency-2026-exact.json",
        "sources/inventories/pdf-emergency-2026-gestante-subtypes.json",
        "sources/inventories/pdf-ps-adult-exact.json",
        "review/semantic-harness-history.json",
    ]
    for rel in artifacts:
        if not (root/rel).is_file():
            fail(f"EXACT_SOURCE_ARTIFACT_MISSING:{rel}")
    if len(load(root/"sources/artifacts/pdf-emergency-2026.pages.json")) != 207:
        fail("PDF1_PAGE_ARTIFACT_COUNT")
    if len(load(root/"sources/artifacts/pdf-ps-adult.pages.json")) != 34:
        fail("PDF2_PAGE_ARTIFACT_COUNT")
    if len(load(root/"sources/inventories/pdf-emergency-2026-exact.json")) != 111:
        fail("PDF1_EXACT_INVENTORY_COUNT")
    if len(load(root/"sources/inventories/pdf-ps-adult-exact.json")) != 57:
        fail("PDF2_EXACT_INVENTORY_COUNT")

    history=load(root/"review/semantic-harness-history.json")
    if history.get("semanticMatchDecisionsImported") is not False:
        fail("SEMANTIC_HARNESS_DECISIONS_IMPORTED")
    fp=history.get("knownFalsePositive") or {}
    if fp.get("a")!="ASMA AGUDA LEVE/ MODERADA" or fp.get("b")!="INSÔNIA LEVE/MODERADA":
        fail("KNOWN_GENERIC_ALIAS_FALSE_POSITIVE_NOT_RECORDED")

    # Exact source title ambiguity retained, never auto-deleted.
    amb=load(root/"review/source-title-ambiguities.json")
    ambiguities=amb.get("ambiguities") or []
    psych=[
        x for x in ambiguities
        if x.get("normalizedTitle")=="sindrome psicotica"
    ]
    if len(psych)!=1 or psych[0].get("count")!=2:
        fail("EXPECTED_SOURCE_AMBIGUITY_NOT_RETAINED")

    # No canonical clinical files are allowed yet.
    for rel in [
        "canonical/protocols",
        "canonical/regimens",
        "canonical/prescription-templates",
    ]:
        json_files=list((root/rel).glob("*.json"))
        if json_files:
            fail(f"UNAUTHORIZED_CANONICAL_FILES:{rel}")

    # Calculator provenance remains pinned to 838 canonical drug set.
    calc=load(Path(args.calculator_manifest))
    created=manifest.get("createdFrom") or {}
    if calc.get("contentSha256")!=created.get("calculatorClinicalDataSha256"):
        fail("CALCULATOR_CONTENT_SHA_DRIFT")
    if calc.get("drugCount")!=created.get("calculatorCanonicalDrugCount"):
        fail("CALCULATOR_DRUG_COUNT_DRIFT")
    if calc.get("drugCount")!=838:
        fail(f"CALCULATOR_EXPECTED_838:{calc.get('drugCount')}")

    # File inventory integrity.
    recorded=manifest.get("fileInventory") or []
    rec_map={x.get("path"):x for x in recorded}
    actual={}
    for p in sorted(root.rglob("*")):
        if not p.is_file():
            continue
        rel=p.relative_to(root).as_posix()
        if rel=="manifest.json":
            continue
        actual[rel]={"sha256":sha_file(p),"bytes":p.stat().st_size}
    if set(rec_map)!=set(actual):
        fail("FILE_INVENTORY_PATH_SET")
    for rel,a in actual.items():
        r=rec_map[rel]
        if r.get("sha256")!=a["sha256"] or r.get("bytes")!=a["bytes"]:
            fail(f"FILE_INVENTORY_HASH:{rel}")

    material="\n".join(
        f"{actual[rel]['sha256']}  {rel}" for rel in sorted(actual)
    )+"\n"
    inv_sha=hashlib.sha256(material.encode("utf-8")).hexdigest()
    if inv_sha!=manifest.get("inventorySha256"):
        fail("INVENTORY_SHA256")

    # Schema files must be valid JSON and contain expected IDs.
    schema_ids={
        "schema/source-record.schema.json":"source-record-v1.json",
        "schema/canonical-protocol.schema.json":"canonical-protocol-v1.json",
        "schema/typed-regimen.schema.json":"typed-regimen-v1.json",
        "schema/prescription-template.schema.json":"prescription-template-v1.json",
    }
    for rel,suffix in schema_ids.items():
        obj=load(root/rel)
        if not str(obj.get("$id","")).endswith(suffix):
            fail(f"SCHEMA_ID:{rel}")

    print("CLINICAL_KNOWLEDGE_VALIDATION=PASS")
    print("CURRENT_PROTOCOLS=123")
    print("PDF_EMERGENCY_TOPLEVEL=111")
    print("PDF_PS_ADULT=57")
    print("GESTANTE_SUBTYPE_POINTERS=5")
    print("TOTAL_TOPLEVEL_SOURCE_RECORDS=291")
    print("TOTAL_SOURCE_ARTIFACTS=296")
    print("LEGACY_CANONICAL_OWNERS=123")
    print("INCOMING_CANONICAL_IDS_ASSIGNED=0")
    print("PT_ES_PUBLICATION_GATE=PASS")
    print("NUMERIC_REGIMEN_LOCALE_INDEPENDENT=PASS")
    print("FUZZY_AUTO_MERGE=BLOCKED")
    print("PRODUCTION_INTEGRATION_ENABLED=false")
    print("PUBLICATION_ENABLED=false")
    print(f"INVENTORY_SHA256={inv_sha}")

if __name__=="__main__":
    main()
