CREATE OR REPLACE FUNCTION eshop.validate_item_type(item_id BIGINT, required_type TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
AS $$
DECLARE
    item_type RECORD;
BEGIN
    -- Retrieve the item's type
    SELECT it.*
    INTO item_type
    FROM eshop.items i
    JOIN eshop.item_types it ON i.item_type = it.id
    WHERE i.id = item_id;

    -- Check if the type matches
    IF item_type IS NULL THEN
        RAISE EXCEPTION 'Item with ID % not found or has no type.', item_id;
    END IF;

    IF item_type.type = required_type THEN
        RETURN TRUE;
    ELSE
        RAISE EXCEPTION 'Item with ID % is not of type %. Found type: %', item_id, required_type, item_type.type;
    END IF;
END;
$$;
