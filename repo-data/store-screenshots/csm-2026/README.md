# CSM Ostrava 2026 — screenshot podklady

Zdrojové snímky byly pořízeny 3. srpna 2026 z produkční webové aplikace
`https://csmostrava.festapp.net` v mobilním viewportu 393 × 852 při 3× device
scale factor. Výsledné PNG mají 1179 × 2556 px.

## Zdrojové snímky

- `source/01-program.png` — hlavní program
- `source/02-map.png` — mapa Ostravy s místy a kategoriemi
- `source/03-news.png` — aktuální novinky
- `source/04-more.png` — informační sekce
- `source/05-search.png` — globální hledání s dotazem „mše“
- `source/06-practical-info.png` — rozbalená praktická informace
- `source/07-map-route-selected.png` — mapa s vybranou trasou Brněnské diecéze
- `source/08-my-program-jan.png` — naplněný Můj program přihlášeného uživatele
  Jana Nováka
- `source/09-program-happening-now.png` — hlavní program se simulovaným časem
  během konání a štítky „DNES“ a „PRÁVĚ TEĎ“
- `source/10-registered-lecture.png` — detail kapacitní přednášky po skutečném
  přihlášení Jana; viditelný stav „Odhlásit se“ a obsazenost 214/400
- `source/11-speaker-profile-photo.png` — profil řečníka s velkou skutečnou
  fotografií, rolí, oblastmi a životopisem
- `source/12-my-program-full.png` — výrazně zaplněný Můj program se
  zaregistrovanými kapacitními přednáškami
- `source/13-counseling-availability.png` — proklik do termínů s viditelnými
  stavy „Volno“ a „Obsazeno“
- `source/14-map-dark-route.png` — mapa s tmavší trasou Litoměřické diecéze
- `source/15-lecture-speaker-photo.png` — detail přednášky „Jak žít sportem a
  zdravým stylem“ s fotografií řečníka Jakuba Rajnohy
- `source/16-information-photo.png` — informační stránka Arcidiecézního centra
  mládeže Praha – Nazaret s fotografií setkání mladých

## Tabletové zdroje

Adresář `source-tablet-apple/` obsahuje šest skutečných obrazovek aplikace v
portrétním rozměru 2064 × 2752 px pro 13″ iPad:

- `01-information-photo.png` — informace s fotografií
- `02-lecture-speaker-photo.png` — přednáška s fotografií řečníka
- `03-map-dark-route.png` — tmavě hnědá trasa Pražské arcidiecéze
- `04-program.png` — nabitý čtvrteční program
- `05-my-program-full.png` — zaplněný Můj program přihlášeného Jana
- `06-program-saturday.png` — bohatý sobotní program

Exportní rozměry a způsob přípravy odvozených verzí jsou v `store-formats.json`.
Apple používá výše uvedený nativní 13″ iPad formát. Pro Google Play se z
marketingové kompozice exportuje samostatný portrét 1440 × 2560 px (9:16), bez
ořezu či deformace skutečného UI.

Adresář `source-tablet-google/` už obsahuje šest odpovídajících skutečných
obrazovky aplikace v rozměru 1440 × 2560 px. Stejná sada je použitelná pro 7″ i
10″ tabletovou sekci Play Console:

- `01-program.png`
- `02-map-dark-route.png`
- `03-lecture-speaker-photo.png`
- `04-information-photo.png`
- `05-my-program-full.png`
- `06-program-saturday.png`

Pro screenshoty přihlášených stavů je použit schválený běžný účastnický účet
`test@test.com` s profilem Jan Novák. Účet nemá redakční ani administrátorská
oprávnění.

Jan je pro demonstrační stav přihlášený na šest kapacitních programů od středy
do soboty. Nově přibyly „Poklad k odhalení“ ve čtvrtek a „Jaké vzdělání
potřebujeme v době AI, aby to nebolelo?“ v sobotu. Registrace prošly stejnými
kapacitními, časovými a kolizními pravidly jako běžné uživatelské přihlášení.

## Marketingový koncept

- `csm-logo-program.png` — přesné transparentní PNG vyrenderované přímo z
  projektového `web/csmostrava-logo-program.svg`
- `marketing-intro-v2.html` — deterministická zdrojová kompozice úvodního panelu
- `marketing-intro-v2.png` — úvodní panel 1179 × 2556 px s přesným logem,
  výrazným 3D natočením a nezměněným skutečným screenshotem aplikace
- `marketing-concept-search-v1.png` — archivní první AI koncept; není určený k
  použití, protože obsahuje nesprávnou interpretaci loga a UI

Nová kompozice už nepoužívá AI interpretaci značky. Logo i obrazovka aplikace
jsou vloženy jako přesná rasterizace projektového SVG a reálný zdrojový snímek.
