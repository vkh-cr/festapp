# CSM Ostrava – podklady pro App Store & Google Play

Zdroj obsahu: objednávkový formulář „Festapp Order - CS" (řádek CSM Ostrava) + reálné funkce aplikace ověřené v produkci. Texty jsou uložené jako fastlane metadata a připravené k nahrání.

## App Store (locale cs) — `metadata/cs/`
| Pole | Soubor | Délka |
|---|---|---|
| Název | name.txt — **CSM Ostrava** | 11/30 |
| Podtitul | subtitle.txt — **Průvodce setkáním mládeže** | 25/30 |
| Propagační text | promotional_text.txt | 156/170 |
| Klíčová slova | keywords.txt | 88/100 |
| Popis | description.txt | 2013/4000 |
| Novinky verze | release_notes.txt | – |
| Privacy URL | privacy_url.txt | – |
| Support / Marketing URL | support_url.txt / marketing_url.txt | – |

## Google Play (cs-CZ) — `metadata/googleplay/cs-CZ/`
- title.txt — **CSM Ostrava**
- short_description.txt — 73/80
- full_description.txt — 2013/4000 (shodný s App Store popisem)

## Privacy Policy
- Jediný kanonický app-specific zdroj: `../../legal/privacy-policy.cs.md`.
- `../../render_legal_pages.mjs` z něj generuje veřejnou stránku https://csmostrava.festapp.net/privacy; preflight odmítne zastaralé HTML.

## App Review Information (do ASC „App Review Information", NE do popisu)
- **Sign-in required: ANO.** Demo účet pro reviewery:
  - E-mail a Keychain service: kanonický manifest `app_store_config.json`, sekce `review.demoAccount`
  - Heslo: pouze macOS Keychain; neukládat do gitu
- Poznámka pro reviewera: „CSM Ostrava is intended for registered event participants. Attendee accounts are issued by the organizer; public account registration is not available. Schedule, map and practical information are accessible without signing in. The supplied demo account represents a regular CSM Ostrava 2026 attendee and provides access to the personal profile, personal schedule and capacity-limited activity registration."

## Ještě je potřeba (mimo tento balík)
- **Ikona / feature graphic** – v objednávce jsou 3 soubory na Google Drive (ikona, baner pro Google Store, logo). Lze stáhnout a nasadit.
- **Draft verze na ASC** – title i popis se nastavují na verzi; ta zatím neexistuje (viz [[festapp-asc-app]]). Po jejím založení nahrát metadata + screenshoty najednou.
