CREATE OR REPLACE FUNCTION game_update_settings(
  oc BIGINT,
  start_time TIMESTAMPTZ,
  end_time TIMESTAMPTZ
)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
  existing_data JSONB;
BEGIN
  -- Check if the user is an editor on the occasion
  IF (SELECT get_is_editor_on_occasion(oc)) <> TRUE THEN
    RETURN jsonb_build_object('code', 403, 'message', 'User is not authorized to edit this occasion');
  END IF;

  -- Retrieve existing data JSON if any
  SELECT data INTO existing_data FROM public.occasions WHERE id = oc;

  -- Update the data JSON with new game settings for start and end times
  UPDATE public.occasions
  SET data = jsonb_set(
      COALESCE(data, '{}'::jsonb),                    -- Ensure data is an empty JSON if NULL
      ARRAY['game'],                                  -- Path to the "game" key
      jsonb_build_object(                             -- New game settings JSON object
        'start', to_jsonb(start_time),
        'end', to_jsonb(end_time)
      ),
      true
    )
  WHERE id = oc;

  -- Return success response
  RETURN jsonb_build_object(
    'code', 200,
    'message', 'Game settings updated successfully'
  );
END;
$$;
