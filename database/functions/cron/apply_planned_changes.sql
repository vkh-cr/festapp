CREATE OR REPLACE FUNCTION apply_planned_changes()
RETURNS VOID
SET search_path = public, extensions AS $$
DECLARE
    change RECORD;
BEGIN
    -- Security Check
    IF auth.role() <> 'service_role' AND session_user <> 'postgres' THEN
        RAISE EXCEPTION 'Access Denied: Service role required.';
    END IF;

    FOR change IN
        SELECT *
        FROM eshop.planned_changes
        WHERE change_time <= NOW() AND applied = FALSE
        ORDER BY change_time ASC
    LOOP
        IF change.change_type = 'products.price' THEN
            -- Update product price
            UPDATE eshop.products
            SET price = change.new_value::NUMERIC
            WHERE id = change.subject_id;

        ELSIF change.change_type = 'products.is_hidden' THEN
            -- Update product visibility
            UPDATE eshop.products
            SET is_hidden = change.new_value::BOOLEAN
            WHERE id = change.subject_id;

        ELSIF change.change_type = 'forms.is_open' THEN
            -- Update form open state
            UPDATE public.forms
            SET is_open = change.new_value::BOOLEAN
            WHERE id = change.subject_id;

        ELSE
            RAISE NOTICE 'Unknown change_type: %', change.change_type;
        END IF;

        -- Mark the change as applied
        UPDATE eshop.planned_changes
        SET applied = TRUE
        WHERE id = change.id;
    END LOOP;
END;
$$ LANGUAGE plpgsql;