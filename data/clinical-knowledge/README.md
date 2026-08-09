# MedCases Clinical Knowledge

Central shadow foundation for protocol, regimen and prescription knowledge.

## Current state
- Production integration: OFF.
- Current MedCases protocols remain the productive owner.
- PDF material is preserved as exact-normalization source snapshots and page artifacts.
- No semantic match from prior audit harnesses is treated as an automatic canonical decision.
- No source record is automatically merged, deleted, overwritten or published.
- PT + ES are mandatory before a canonical protocol can become publishable.
- Numeric regimens are locale-independent and must never be duplicated by language.

## Layers
- `sources/artifacts/`: exact source artifacts used for audit/provenance.
- `sources/inventories/`: exact normalized source inventories.
- `sources/*`: one review record per source entry.
- `canonical/protocols/`: future canonical protocol owners.
- `canonical/regimens/`: future deterministic typed regimens.
- `canonical/prescription-templates/`: presentation layer only.
- `review/`: reconciliation queues and source ambiguities.
- `schema/`: structural contracts.
- `policies/`: canonicalization and PT/ES rules.

## Validate
From repository root:

```bash
python3 scripts/validate-clinical-knowledge.py
```

The foundation remains shadow-only until deduplication, clinical conflict review,
typed-regimen validation and PT/ES parity are complete.
