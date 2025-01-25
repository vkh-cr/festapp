CREATE OR REPLACE FUNCTION get_news_with_views(oc bigint)
RETURNS TABLE(
    id bigint,
    created_at timestamp with time zone,
    message text,
    name text,
    surname text,
    views bigint
)
SECURITY DEFINER
LANGUAGE plpgsql
AS $$

BEGIN
    PERFORM check_access_to_occasion(oc);

    RETURN QUERY
    SELECT
        n.id,
        n.created_at,
        n.message,
        ui.name,
        ui.surname,
        COUNT(nv.id) AS views_count
    FROM
        public.news n
    JOIN
        public.user_info ui ON ui.id = n.created_by
    LEFT JOIN
        public.user_news_views nv ON nv.news_id = n.id
    WHERE
        n.occasion = oc
    GROUP BY
        n.id, ui.name, ui.surname
    ORDER BY
        n.created_at;
END;
$$;
