# Aplikace Absolventský Velehrad

Repozitář pro vývoj aplikace AV -> mobilní aplikace pro účastníky a dobrovolníky Absolventského Velehradu.

Základní funkce aplikace:
- Personalizovaná aplikace:
  -  přihlášení účastníka/dobrovolníka do aplikace. Účastník se může přihlásit do aplikace a tím získává možnost přihlásit se na programy a zobrazit si je.
- Obsah aplikace:
  - Program: zobrazení celého programu AV a programu, na který se účastník zaregistroval + možnost registrace na program
  - Ohlášky: oznámení/aktuality AV (pokud oznámení přijde, zobrazí se v záhlaví aplikace)
  - Mapa: důležitá místa AV, na kterých probíhá program
  - Info: základní informace o ubytování, stravování, důležitých kontaktech a obecně o programu
  - Administrace: je možné zadat a vytvořit program, informace a oznámení, které se zobrazí uživatelům

Nadstavba:
- pro účastníka, který bude zároveň dobrovolník, bude aplikace obsahovat informace, které souvisí s jeho dobrovolnickou činností (např. vyznačené časové bloky v programu s jeho dobrovolnickou aktivitou; speciální oznámení pro dobrovolníky, apod.)

## Základní grafický návrh aplikace

Odkaz do Figma se [základním designem aplikace](https://www.figma.com/file/AwWWI7HHs8Nh1jtiUrCaHa/App-First-draft?node-id=0%3A1&t=xkYTZ3Mz2eovnbQo-1)


## Odkaz na live verzi aplikace

[Aplikace Absolventský Velehrad](https://av23.cz)


## Vývoj aplikace

**2024.01**
- Plná podpora offline režimu zobrazení (pokud není připojení dostupné, použijí se data z cache). Stačí jednou otevřít aplikaci a data se načtou na pozadí.
- Timetable zobrazení programu (skrolovatelná stránka s osou času a místa).
- Vytváření mého programu z pomocí + tlačítka.
- Plná podpora url (možnost odkazů na stránky v aplikaci).
- Mezi jazyky přidána ukrajinština.




