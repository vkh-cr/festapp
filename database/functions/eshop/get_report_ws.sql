CREATE OR REPLACE FUNCTION get_report_ws(occasion_link TEXT)
RETURNS jsonb SECURITY DEFINER AS $$
DECLARE
    occasion_id bigint;
    report_data text;
BEGIN
    SELECT id
    INTO occasion_id
    FROM public.occasions
    WHERE link = occasion_link;

    IF occasion_id IS NULL THEN
        RAISE EXCEPTION 'Occasion not found for link: %', occasion_link;
    END IF;

    IF NOT get_is_editor_order_view_on_occasion(occasion_id) THEN
        RAISE EXCEPTION 'User is not authorized to view this report.';
    END IF;

    report_data := get_report_for_occasion(occasion_id);

    RETURN jsonb_build_object(
        'code', 200,
        'data', report_data
    );
EXCEPTION WHEN OTHERS THEN
    RETURN jsonb_build_object(
        'code', 500,
        'message', SQLERRM,
        'detail', coalesce(SQLERRM, 'An unexpected error occurred')
    );
END;
$$ LANGUAGE plpgsql;
