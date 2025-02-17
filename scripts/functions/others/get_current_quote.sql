CREATE OR REPLACE FUNCTION get_current_quote(unit_id bigint)
RETURNS jsonb
SECURITY DEFINER
AS $$
DECLARE
  unit_rec RECORD;
  unit_features jsonb;
  quotes_feature jsonb;
  feature_idx int;
  feature jsonb;
  feature_found BOOLEAN := FALSE;

  curr_quote_id bigint;
  curr_quote_date timestamptz;
  curr_quote_rec RECORD;
  next_quote_rec RECORD;

  utc_today date := (now() at time zone 'utc')::date;
  updated_features jsonb;
BEGIN
  -- Check if the unit exists and get its features
  SELECT * INTO unit_rec
  FROM public.units
  WHERE id = unit_id;

  IF NOT FOUND THEN
    RETURN jsonb_build_object(
      'code', 404,
      'message', 'Unit not found'
    );
  END IF;

  unit_features := unit_rec.features;
  IF unit_features IS NULL THEN
    RETURN jsonb_build_object(
      'code', 404,
      'message', 'No features configured for this unit'
    );
  END IF;

  -- Look for the "quotes" feature in the features JSON array
  FOR feature_idx IN 0 .. jsonb_array_length(unit_features) - 1 LOOP
    feature := unit_features -> feature_idx;
    IF (feature ->> 'code') = 'quotes'
       AND (feature ->> 'is_enabled') = 'true' THEN
      quotes_feature := feature;
      feature_found := TRUE;
      EXIT;
    END IF;
  END LOOP;

  IF NOT feature_found THEN
    RETURN jsonb_build_object(
      'code', 404,
      'message', 'Quotes feature is not enabled for this unit'
    );
  END IF;

  -- Attempt to get the current quote id and its last update date from the feature
  curr_quote_id := NULL;
  IF quotes_feature ? 'quote_id' THEN
    curr_quote_id := (quotes_feature ->> 'quote_id')::bigint;
  END IF;

  curr_quote_date := NULL;
  IF quotes_feature ? 'quote_date' THEN
    curr_quote_date := (quotes_feature ->> 'quote_date')::timestamptz;
  END IF;

  -- If a current quote id exists, try to fetch that information record
  IF curr_quote_id IS NOT NULL THEN
    SELECT *
    INTO curr_quote_rec
    FROM public.information
    WHERE id = curr_quote_id
      AND type = 'quote'
      AND occasion IS NULL
      AND unit = unit_id
      AND is_hidden = false
    LIMIT 1;
  END IF;

  -- If we have a current quote record and its stored quote_date is today, return it
  IF curr_quote_rec IS NOT NULL AND curr_quote_date IS NOT NULL THEN
    IF (curr_quote_date at time zone 'utc')::date = utc_today THEN
      RETURN jsonb_build_object(
        'code', 200,
        'data', row_to_json(curr_quote_rec)
      );
    END IF;
  END IF;

  -- Either there's no current quote, or it's outdated.
  -- Determine the next quote based on the current one’s order.
  IF curr_quote_rec IS NOT NULL THEN
    SELECT *
    INTO next_quote_rec
    FROM public.information
    WHERE type = 'quote'
      AND occasion IS NULL
      AND unit = unit_id
      AND is_hidden = false
      AND COALESCE("order", 0) > COALESCE(curr_quote_rec."order", 0)
    ORDER BY COALESCE("order", 0) ASC
    LIMIT 1;
  ELSE
    SELECT *
    INTO next_quote_rec
    FROM public.information
    WHERE type = 'quote'
      AND occasion IS NULL
      AND unit = unit_id
      AND is_hidden = false
    ORDER BY COALESCE("order", 0) ASC
    LIMIT 1;
  END IF;

  -- If no next quote is found, try wrapping around to the first one in order.
  IF next_quote_rec IS NULL THEN
    SELECT *
    INTO next_quote_rec
    FROM public.information
    WHERE type = 'quote'
      AND occasion IS NULL
      AND unit = unit_id
      AND is_hidden = false
    ORDER BY COALESCE("order", 0) ASC
    LIMIT 1;
  END IF;

  IF next_quote_rec IS NULL THEN
    RETURN jsonb_build_object(
      'code', 404,
      'message', 'No quotes found for this unit'
    );
  END IF;

  -- Update the unit's features: set the new quote id and update its quote_date to now (UTC)
  updated_features := unit_features;
  FOR feature_idx IN 0 .. jsonb_array_length(unit_features) - 1 LOOP
    feature := unit_features -> feature_idx;
    IF (feature ->> 'code') = 'quotes'
       AND (feature ->> 'is_enabled') = 'true' THEN
      updated_features := jsonb_set(
        updated_features,
        ARRAY[feature_idx::text],
        (feature || jsonb_build_object(
            'quote_id', next_quote_rec.id,
            'quote_date', (now() at time zone 'utc')
         ))
      );
      EXIT;
    END IF;
  END LOOP;

  UPDATE public.units
  SET features = updated_features
  WHERE id = unit_id;

  -- Return the new (current) quote information
  RETURN jsonb_build_object(
    'code', 200,
    'data', row_to_json(next_quote_rec)
  );
END;
$$ LANGUAGE plpgsql;
