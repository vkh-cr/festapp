CREATE OR REPLACE FUNCTION generate_schema_triggers_ddl(p_schema text)
RETURNS text AS $$
WITH aggregated_triggers AS (
  SELECT
    trigger_schema,
    trigger_name,
    event_object_schema,
    event_object_table,
    action_timing,
    action_orientation,
    string_agg(event_manipulation, ' or ') AS events,
    max(action_condition) AS action_condition,
    max(action_statement) AS action_statement
  FROM information_schema.triggers
  WHERE trigger_schema = p_schema
  GROUP BY trigger_schema, trigger_name, event_object_schema, event_object_table, action_timing, action_orientation
),
formatted_triggers AS (
  SELECT
    'create trigger ' || quote_ident(trigger_name) || E'\n' ||
    upper(action_timing) || ' ' || lower(events) || ' on ' ||
      (CASE
         WHEN event_object_schema = p_schema THEN quote_ident(event_object_table)
         ELSE quote_ident(event_object_schema) || '.' || quote_ident(event_object_table)
       END) || E'\nfor each ' || lower(action_orientation) || E'\n' ||
    CASE
      WHEN action_condition IS NOT NULL THEN 'when (' || action_condition || ')' || E'\n'
      ELSE ''
    END ||
    'execute ' || action_statement || ';' AS trigger_ddl
  FROM aggregated_triggers
)
SELECT string_agg(trigger_ddl, E'\n\n') AS ddl_all
FROM formatted_triggers;
$$ LANGUAGE sql STABLE;
