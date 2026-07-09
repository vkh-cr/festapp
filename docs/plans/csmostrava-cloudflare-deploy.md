# Nasazení csmostrava na Cloudflare (vč. auto-update prompt)

## Context

Rekonstrukce ztracených csmostrava featur (vč. „automatické vylepšené aktualizace",
viz níže) je hotová na větvi **`csm-recovery`**. Živá produkce
`https://csmostrava.festapp.net` běží dosud na buildu nasazeném **přímo přes
wrangler** (nikdy nepushnuto do gitu) — proto je 16 buildů napřed. Tímto
nasazením se **git stává zdrojem pravdy** a nahradí ten přímý deploy.

**Deploy pipeline (fakta z repa):**
- `.github/workflows/deploy.yml` se spustí na **push do `prod/*`** (nebo ručně přes
  `workflow_dispatch`).
- Job `detect` načte `automation/project.conf` → `DEPLOY_TARGET=cloudflare`,
  `CLOUDFLARE_PROJECT_NAME=csmostrava2026`.
- Job `cloudflare`: checkout → Node 20 → Flutter 3.38.7 → `./automation/cloudflare_build.sh`
  → PATCH CF `production_branch` na pushnutou větev → `wrangler pages deploy build/web
  --project-name=csmostrava2026 --branch=<větev>`.
- GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
- Cílová prod větev: **`prod/csmostrava2026`** (na originu je na `c38fd9dd6`,
  tj. `csm-recovery` je 3 commity + necommitnuté změny napřed).

**Auto-update prompt v tomto buildu:** `cloudflare_build.sh` po Flutter buildu volá
`automation/emit_version_manifest.sh` → vygeneruje `build/web/festapp-version.json`
(`{version, main}`) + stampovanou kopii `main.dart.<ver>.js`. `configure_version.js`
(přes `apply_config.sh`) zapečeně nastaví `window.__FESTAPP_BUILD_VERSION__` do
`web/index.html`. Klient `web/festapp_update_prompt.js` (Flutter ho zkopíruje do
`build/web`) pak pollingem `festapp-version.json` nabídne reload banner.

---

## ⚠️ Před nasazením ověřit (blokující)

1. **Feature-parita ≥ živá produkce.** Deploy **přepíše** živý web/csmostrava.festapp.net
   git-rekonstrukcí. Pokud rekonstrukce nepokrývá vše, co je v živém buildu, dojde k
   regresi. Rekonstrukce je považovaná za hotovou (features + backend + klient), ale je
   to poslední bod k rozmyšlení.
2. **VERSION bump.** `project.conf` má `VERSION=0.19.33+273`, ale živý
   `festapp-version.json` = `0.19.39+287` (a app build byl až `0.19.41+289`). Deploy s
   `273` = vizuální downgrade. **Zvedni VERSION nad nejvyšší nasazený build**, např.
   `0.19.42+290`. (Banner se řídí `!==`, takže technicky funguje i tak, ale downgrade
   nechceme.)
3. **GitHub secrets existují** (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`) — jsou
   nastavené na repu, jinak CI job selže na PATCH/deploy kroku.

---

## Krok za krokem (doporučená cesta = CI)

### 1. Bump verze + propagace configu
```bash
cd /Users/miakh/source/festapp
# Zvedni VERSION v project.conf (ručně nebo přes increment), pak propaguj:
#   VERSION=0.19.42+290   (uprav v automation/project.conf)
./automation/apply_config.sh          # → configure_version.js zapíše verzi do
                                      #   pubspec.yaml, package.json, version.js,
                                      #   web/index.html (__FESTAPP_BUILD_VERSION__)
```

### 2. Testy
```bash
./automation/test_all.sh web automation     # klient (vč. festapp_update_prompt) + build wiring
# volitelně: ./automation/test_all.sh flutter
```
Zelené musí být minimálně `web` (152 testů) a `automation/tests/update_prompt.test.sh`.
> Pozn.: `deploy_workflow.test.sh` hlásí lokálně „deploy.yml is not valid YAML" jen kvůli
> chybějícímu PyYAML — v CI (Ubuntu) projde; není to blokující.

### 3. Commit rekonstrukce na `csm-recovery`
```bash
git status                            # projít VŠECHNY M + untracked (velký rozsah!)
git add -A
git commit -m "csmostrava: auto-update prompt + version manifest; bump to <VERSION>"
```

### 4. Přenést na prod větev a pushnout (spustí deploy)
```bash
git fetch origin
git checkout prod/csmostrava2026
git merge --ff-only csm-recovery      # nebo merge/rebase dle stavu; ff-only je nejčistší
git push origin prod/csmostrava2026   # ← push do prod/* spustí .github/workflows/deploy.yml
```
Pokud `--ff-only` selže (prod větev se rozešla), udělej `git merge csm-recovery` a vyřeš
konflikty, nebo `git rebase prod/csmostrava2026` na `csm-recovery` a pak ff.

### 5. Sledovat běh
```bash
gh run watch                          # nebo: gh run list --branch prod/csmostrava2026
```
CI musí projít joby `detect` → `cloudflare` (build → PATCH production_branch → wrangler deploy).

---

## Post-deploy verifikace (auto-update mechanismus)

```bash
V=<VERSION>                                   # např. 0.19.42+290
BASE=https://csmostrava.festapp.net

# 1. manifest má novou verzi
curl -s "$BASE/festapp-version.json?t=$(date +%s)"      # → {"version":"$V","main":"main.dart.<V s '-'>.js"}
# 2. skript i stampovaný main jsou nasazené
curl -s -o /dev/null -w "%{http_code}\n" "$BASE/festapp_update_prompt.js"        # 200
curl -s -o /dev/null -w "%{http_code}\n" "$BASE/main.dart.${V/+/-}.js"           # 200
# 3. index (occasion route) má zapečenou verzi + skript
curl -s "$BASE/csmostrava2026" | grep -E "__FESTAPP_BUILD_VERSION__|festapp_update_prompt.js"
```

**Ověření banneru naživo** (dvě možnosti):
- **Vynucení UI:** otevři app v prohlížeči → v konzoli:
  `window.dispatchEvent(new CustomEvent('festapp-update-available',{detail:{version:'x',reason:'new-version'}}))`
  → musí vyjet spodní banner ve správném jazyce.
- **Reálný scénář:** nech otevřenou záložku na tomto buildu, pak nasaď jakýkoliv další
  build s vyšším `+build`. Do 5 min (nebo při přepnutí na záložku / focusu) se v původní
  záložce objeví „Je dostupná nová verze aplikace. / Načíst".

Dále rychlá smoke-kontrola rekonstruovaných featur: GlobalSearch, EventFeedback na `/event`,
Icons/Typy míst v Places adminu, place-type filtr na mapě, „Můj program" light layout.

---

## Rollback

Cloudflare Pages drží historii deploymentů. Rollback bez gitu:
```bash
# přes dashboard: Pages → csmostrava2026 → Deployments → předchozí → "Rollback"
# nebo API (token/account viz roman_seznamka/.env, account 84b32318…):
curl -X POST "https://api.cloudflare.com/client/v4/accounts/<ACCOUNT>/pages/projects/csmostrava2026/deployments/<DEPLOY_ID>/rollback" \
  -H "Authorization: Bearer <CF_API_TOKEN>"
```
Git rollback: revert commitu na `prod/csmostrava2026` a znovu push (spustí čistý deploy).

---

## Fallback: lokální deploy přes wrangler (jen nouzově)

CI je preferovaná cesta — drží git jako zdroj pravdy. **Přímý wrangler deploy je přesně
to, co způsobilo 16-buildový drift** (nasazeno mimo git). Použij jen když CI nejede:
```bash
./automation/cloudflare_build.sh                         # vyrobí build/web (vč. version.json)
CLOUDFLARE_API_TOKEN=<token z roman_seznamka/.env> \
CLOUDFLARE_ACCOUNT_ID=84b32318… \
npx wrangler pages deploy build/web \
  --project-name=csmostrava2026 --branch=prod/csmostrava2026
```
Po nouzovém lokálním deployi **hned commitni + pushni** stejný stav do
`prod/csmostrava2026`, aby git zůstal zarovnaný s produkcí.

---

## Soubory, kterých se deploy týká (tento rekonstrukční kus)

- `web/index.html` — `__FESTAPP_BUILD_VERSION__` blok + legacy-SW cleanup + `<script src="festapp_update_prompt.js">`
- `web/festapp_update_prompt.js` — polling + reload banner (Flutter build ho kopíruje do `build/web`)
- `automation/configure_version.js` — stampuje verzi do `web/index.html`
- `automation/emit_version_manifest.sh` — píše `festapp-version.json` + stampovaný `main.dart`
- `automation/cloudflare_build.sh` — krok 2b volá `emit_version_manifest.sh`
- `automation/project.conf` — `VERSION` (bump před deployem)
- testy: `automation/tests/update_prompt.test.sh`, `web_client/tests/core/festapp_update_prompt.test.js`
