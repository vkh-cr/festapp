# Plán: Global Search přes Ctrl+F

Stav k 2026-07-10, větev `prod/csmostrava2026`.

## Hotovo

- **Ctrl+F zkratka** — `lib/main.dart`: `CallbackShortcuts` v `MaterialApp.builder` (nad Navigatorem), binding `SingleActivator(LogicalKeyboardKey.keyF, control: true)`. Handler `_openGlobalSearch`:
  - otevře dialog jen když je povolená featura `global_search` (`FeatureService.isFeatureEnabled(FeatureConstants.globalSearch)`),
  - používá kontext root navigátoru (`RouterService.router.navigatorKey.currentContext`), protože zkratka žije nad Navigatorem.
- **Guard proti vršení dialogů** — `lib/components/search/global_search_dialog.dart`: statické `_isShowing` v `GlobalSearchDialog.show`, opakované Ctrl+F při otevřeném dialogu nic neudělá.
- Analyzer čistý (3 zbývající nálezy v `main.dart` jsou předchozí, nesouvisí).
- Dev server: starý proces na :8080 vracel 500 → ukončen, spuštěn čerstvý `fvm flutter run -d web-server --web-port 8080`, servíruje novou verzi (ověřeno HTTP 200 + servírované moduly).

## Zbývá

1. **Ruční ověření v prohlížeči** na `localhost:8080`:
   - occasion se zapnutou featurou `global_search` + Ctrl+F → otevře se Global Search dialog,
   - opakované Ctrl+F neotevře druhý dialog,
   - s vypnutou featurou Ctrl+F nechá prohlížeči nativní hledání (handler se nespustí → žádný preventDefault).
2. Volitelně přidat **Cmd+F** pro Mac — druhý binding (`meta: true`) vedle stávajícího v `main.dart`.
3. Po odsouhlasení: bump `VERSION`, commit, deploy přes `deploy_direct.sh` (standardní postup pro csmostrava, bez git push).

## Poznámky

- Na macOS Ctrl+F v textových polích normálně posouvá kurzor (emacs binding) — zkratka ho přebije i tam.
- Na pozadí běží ještě starší dev server na portu **8090** (nesouvisí, ponechán).
