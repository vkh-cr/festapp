CREATE OR REPLACE FUNCTION swap_spot_tickets(spot_id_1 BIGINT, spot_id_2 BIGINT)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    spot1 RECORD;
    spot2 RECORD;
    occasion_id_common BIGINT;
    opt_id_1 BIGINT;
    opt_id_2 BIGINT;
    has_permission BOOLEAN;
    now_time TIMESTAMP WITH TIME ZONE := NOW();
BEGIN
    -- 1. Input Validation
    IF spot_id_1 IS NULL OR spot_id_2 IS NULL THEN
        RAISE EXCEPTION 'Both spot_id_1 and spot_id_2 must be provided'
            USING ERRCODE = '22023'; -- invalid_parameter_value
    END IF;

    IF spot_id_1 = spot_id_2 THEN
        RAISE EXCEPTION 'Cannot swap a spot with itself'
            USING ERRCODE = '22023'; -- invalid_parameter_value
    END IF;

    -- 2. Fetch Spot Data
    SELECT * INTO spot1 FROM eshop.spots WHERE id = spot_id_1;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Spot 1 not found (ID: %)', spot_id_1
            USING ERRCODE = 'P0002'; -- no_data_found (custom)
    END IF;

    SELECT * INTO spot2 FROM eshop.spots WHERE id = spot_id_2;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'Spot 2 not found (ID: %)', spot_id_2
            USING ERRCODE = 'P0002'; -- no_data_found (custom)
    END IF;

    -- 3. Permission and Occasion Check
    IF spot1.occasion IS NULL OR spot2.occasion IS NULL THEN
         RAISE EXCEPTION 'Spots are missing occasion information'
            USING ERRCODE = '22004'; -- null_value_not_allowed
    END IF;

    IF spot1.occasion <> spot2.occasion THEN
        RAISE EXCEPTION 'Spots do not belong to the same occasion (Spot1: %, Spot2: %)',
            spot1.occasion, spot2.occasion
            USING ERRCODE = 'P0001'; -- custom_violation
    END IF;

    -- Set the common occasion ID
    occasion_id_common := spot1.occasion;

    -- Check permission using the common occasion ID
    BEGIN
        SELECT get_is_editor_order_on_occasion(occasion_id_common) INTO has_permission;
    EXCEPTION
        WHEN undefined_function THEN
            RAISE EXCEPTION 'Permission check function get_is_editor_order_on_occasion() does not exist.'
                USING ERRCODE = '42883'; -- undefined_function
        WHEN OTHERS THEN
            RAISE EXCEPTION 'Error during permission check: %', SQLERRM;
    END;


    IF has_permission <> TRUE THEN
        RAISE EXCEPTION 'User is not authorized to edit orders for this occasion'
            USING ERRCODE = '42501'; -- insufficient_privilege
    END IF;

    opt_id_1 := spot1.order_product_ticket;
    opt_id_2 := spot2.order_product_ticket;

    UPDATE eshop.spots
    SET
        order_product_ticket = CASE
            WHEN id = spot_id_1 THEN opt_id_2
            WHEN id = spot_id_2 THEN opt_id_1
        END,
        updated_at = now_time
    WHERE id IN (spot_id_1, spot_id_2);

END;
$$;