-- =============================================================================
-- SEED (data, NOT auto-applied): counseling area catalog (public.speaker_topics).
--
-- The exact 20 areas for csmostrava as provided by the organizer (2026-07-10).
-- Use ONLY these. Areas have NO code/key — the only identifier is the hidden
-- primary key id (see migration 20260710160000_drop_speaker_topic_code.sql).
--
-- This is DATA, not schema — intentionally NOT wired into migrations and MUST
-- NOT be applied to the live database automatically. It is a FULL REPLACE for
-- the given occasion: it deletes the occasion's existing areas (and, by CASCADE,
-- any speaker↔area links) and re-inserts the list below. Run it deliberately.
--
-- Usage (psql). The occasion is looked up by link; pass it as a variable:
--   psql "$DATABASE_URL" -v occasion_link=csmostrava2026 \
--     -f database/seed/speakers_counseling_topics_seed.sql
-- =============================================================================

DELETE FROM public.speaker_topics
WHERE occasion = (SELECT id FROM public.occasions WHERE link = :'occasion_link');

INSERT INTO public.speaker_topics (occasion, title, "order", is_hidden)
SELECT o.id, t.title, t.ord, false
FROM public.occasions o
CROSS JOIN (
    VALUES
        ('Vztahy v rodině',                                                                1),
        ('Vztahy - komunikace s prarodiči',                                                2),
        ('Obtíže ve vztazích ve školním kolektivu, šikana',                                3),
        ('Volba životního povolání',                                                       4),
        ('Období známosti',                                                                5),
        ('Partnerské vztahy',                                                              6),
        ('Sexualita, plodnost, Symptotermální metoda přirozeného plánování rodičovství',   7),
        ('Pochybnosti ve víře',                                                            8),
        ('Duchovní rozhovor',                                                              9),
        ('Úzkosti, deprese',                                                              10),
        ('Obavy a nejistoty',                                                             11),
        ('Sebepoškozování',                                                               12),
        ('Sebepřijetí',                                                                   13),
        ('Pochybnosti o pohlavní identitě',                                               14),
        ('Závislosti (např. drogy, internet, pornografie…)',                              15),
        ('Smrt blízkého člověka',                                                         16),
        ('Magie, esoterika a okultismus',                                                 17),
        ('Zneužívání sexuální',                                                           18),
        ('Zneužívání moci',                                                               19),
        ('Zneužívání duchovní/manipulace v církvi',                                       20)
) AS t(title, ord)
WHERE o.link = :'occasion_link';
