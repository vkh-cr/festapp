# CSM Ostrava – podklady pro App Store & Google Play

Zdroj obsahu: objednávkový formulář „Festapp Order - CS" (řádek CSM Ostrava) + reálné funkce aplikace ověřené v produkci. Texty jsou uložené jako fastlane metadata a připravené k nahrání.

## App Store (locale cs) — `metadata/cs/`
| Pole | Soubor | Délka |
|---|---|---|
| Název | name.txt — **CSM Ostrava** | 11/30 |
| Podtitul | subtitle.txt — **Průvodce setkáním mládeže** | 25/30 |
| Propagační text | promotional_text.txt | 156/170 |
| Klíčová slova | keywords.txt | 88/100 |
| Popis | description.txt | 1934/4000 |
| Novinky verze | release_notes.txt | – |
| Privacy URL | privacy_url.txt | – |
| Support / Marketing URL | support_url.txt / marketing_url.txt | – |

## Google Play (cs-CZ) — `metadata/googleplay/cs-CZ/`
- title.txt — **CSM Ostrava**
- short_description.txt — 73/80
- full_description.txt — 1934/4000 (shodný s App Store popisem)

## Privacy Policy
- `PRIVACY_POLICY.md` — app-specific návrh (doporučeno vystavit na `https://csmostrava.festapp.net/privacy`).
- Dočasně lze použít obecné zásady AKSM: https://aksm.cz/informace-o-zpracovani-osobnich-udaju/

## App Review Information (do ASC „App Review Information", NE do popisu)
- **Sign-in required: ANO.** Demo účet pro reviewery:
  - E-mail: **test@test.com**
  - Heslo: **test**
- Poznámka pro reviewera (návrh): „Some features (event sign-up, personal profile) require a free e-mail login. Public content (schedule, map, info) works without login. Demo account above is a regular attendee of CSM Ostrava 2026."

## Ještě je potřeba (mimo tento balík)
- **Ikona / feature graphic** – v objednávce jsou 3 soubory na Google Drive (ikona, baner pro Google Store, logo). Lze stáhnout a nasadit.
- **Draft verze na ASC** – title i popis se nastavují na verzi; ta zatím neexistuje (viz [[festapp-asc-app]]). Po jejím založení nahrát metadata + screenshoty najednou.
