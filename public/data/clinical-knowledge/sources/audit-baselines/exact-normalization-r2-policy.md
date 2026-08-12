# Exact canonical protocol decision policy V1-A-R2

- R1 semantic counts are retired and cannot authorize a writer.
- Source extraction is exact: 123 current, 111 PDF1 top-level, 57 PDF2.
- The repeated PDF1 title `SÍNDROME PSICÓTICA` is retained as a source ambiguity until its two sections are clinically disambiguated.
- PDF1 reference/adjunct modules are not silently converted into disease protocols.
- Gestantes contributes population-specific subtype candidates; these must not overwrite adult regimens.
- A fuzzy title match can only enter manual review. It cannot delete, merge, overwrite or create a numeric conflict automatically.
- Numeric conflicts are compared only after a controlled canonical entity/alias match.
- `Caso Clínico:` owners inside CURRENT are reviewed as possible scenario/subtype material, not blindly deleted.
- One final canonical protocol owner may retain multiple explicit subtypes/stages/populations.
- Drug identity must resolve to calculator `drugId`.
- Numeric regimen is locale-independent.
- PT and ES narrative parity is mandatory before publication.
- No automatic writer is authorized by this audit.
