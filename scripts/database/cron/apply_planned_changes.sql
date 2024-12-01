CREATE OR REPLACE FUNCTION apply_planned_changes()
RETURNS VOID AS $$
DECLARE
    change RECORD;
BEGIN
    FOR change IN
        SELECT *
        FROM eshop.planned_changes
        WHERE change_time <= NOW() AND applied = FALSE
    LOOP
        IF change.change_type = 'items.price' THEN
            -- Update item price
            UPDATE eshop.items
            SET price = change.new_value::NUMERIC
            WHERE id = change.subject_id;

        ELSIF change.change_type = 'items.is_hidden' THEN
            -- Update item visibility
            UPDATE eshop.items
            SET is_hidden = change.new_value::BOOLEAN
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

SELECT cron.schedule('apply_planned_changes', '*/1 * * * *', 'CALL apply_planned_changes()');