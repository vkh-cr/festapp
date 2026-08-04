CREATE OR REPLACE FUNCTION public.get_event_participants_for_edit(
  p_event bigint
)
RETURNS jsonb
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public, extensions
AS $function$
DECLARE
  v_occasion bigint;
  v_participants jsonb;
BEGIN
  SELECT e.occasion
  INTO v_occasion
  FROM public.events e
  WHERE e.id = p_event;

  IF NOT FOUND THEN
    RETURN jsonb_build_object('code', 404, 'message', 'Event not found');
  END IF;

  IF NOT (
    public.get_is_editor_view_on_occasion(v_occasion)
    OR public.get_is_editor_on_occasion(v_occasion)
    OR public.get_is_admin_on_occasion(v_occasion)
  ) THEN
    RETURN jsonb_build_object('code', 403, 'message', 'Insufficient permissions');
  END IF;

  SELECT COALESCE(
    jsonb_agg(
      jsonb_build_object(
        'id', ui.id,
        'name', ui.name,
        'surname', ui.surname
      )
      ORDER BY ui.surname, ui.name, ui.id
    ),
    '[]'::jsonb
  )
  INTO v_participants
  FROM public.event_users eu
  JOIN public.user_info ui ON ui.id = eu."user"
  WHERE eu.event = p_event;

  RETURN jsonb_build_object('code', 200, 'data', v_participants);
END;
$function$;

REVOKE ALL ON FUNCTION public.get_event_participants_for_edit(bigint)
  FROM PUBLIC;
REVOKE ALL ON FUNCTION public.get_event_participants_for_edit(bigint)
  FROM anon;
GRANT EXECUTE ON FUNCTION public.get_event_participants_for_edit(bigint)
  TO authenticated, service_role;
