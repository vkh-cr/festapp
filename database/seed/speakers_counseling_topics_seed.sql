-- =============================================================================
-- SEED (TEMPLATE, NOT auto-applied): counseling topic catalog for the speakers
-- feature (public.speaker_topics).
--
-- The plan (docs/plans/2026-07-09_speakers_counseling_plan.md, §1/§6.5) calls
-- for ~20 counseling areas taken from Julie Adltová's e-mail. That e-mail lists
-- only three verbatim examples in the plan ("vztahy v rodině", "úzkosti,
-- deprese", "duchovní rozhovor"); the catalog below is a representative
-- starting set for a Catholic youth festival (csmostrava) built around those
-- examples. BEFORE using it, reconcile the titles/codes with the real e-mail.
--
-- This script is DATA, not schema — it is intentionally NOT wired into
-- migrations and MUST NOT be applied to the live database automatically. Run it
-- deliberately against the intended occasion, or enter the areas through the
-- admin "Správa oblastí" editor instead.
--
-- Usage (psql). The occasion is looked up by link; pass it as a variable:
--   psql "$DATABASE_URL" -v occasion_link=csmostrava2026 \
--     -f database/seed/speakers_counseling_topics_seed.sql
-- Re-running is safe: existing (occasion, code) rows are updated, not duplicated.
-- =============================================================================

INSERT INTO public.speaker_topics (occasion, code, title, "order", is_hidden)
SELECT o.id, t.code, t.title, t.ord, false
FROM public.occasions o
CROSS JOIN (
    VALUES
        ('rodina',             'Vztahy v rodině',                              1),
        ('partnerstvi',        'Partnerské vztahy a vztahy před manželstvím',  2),
        ('manzelstvi',         'Manželství',                                   3),
        ('vychova',            'Výchova dětí',                                 4),
        ('uzkosti_deprese',    'Úzkosti, deprese',                             5),
        ('psychicke_zdravi',   'Psychické zdraví a těžké životní situace',     6),
        ('sebeprijeti',        'Sebepřijetí a sebevědomí',                     7),
        ('zavislosti',         'Závislosti',                                   8),
        ('ztrata_truchleni',   'Ztráta blízkého a truchlení',                  9),
        ('odpusteni',          'Odpuštění a smíření',                         10),
        ('duchovni_rozhovor',  'Duchovní rozhovor',                          11),
        ('vira_pochybnosti',   'Víra a pochybnosti',                         12),
        ('modlitba',           'Modlitba a duchovní život',                  13),
        ('smysl_zivota',       'Smysl života a povolání',                    14),
        ('rozlisovani',        'Rozlišování životního povolání',             15),
        ('sexualita_cistota',  'Sexualita a čistota',                        16),
        ('identita',           'Identita a hledání sebe sama',               17),
        ('studium_prace',      'Studium a práce',                            18),
        ('primluvna_modlitba', 'Přímluvná modlitba',                         19),
        ('svatost_smireni',    'Svátost smíření',                            20)
) AS t(code, title, ord)
WHERE o.link = :'occasion_link'
ON CONFLICT (occasion, code) WHERE (code IS NOT NULL)
DO UPDATE SET title = EXCLUDED.title, "order" = EXCLUDED."order";
