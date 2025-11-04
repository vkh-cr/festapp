CREATE OR REPLACE FUNCTION get_reply_to_email_for_order(
    p_order_id BIGINT
)
RETURNS TEXT
LANGUAGE sql
STABLE
AS $$
    -- This function retrieves the 'reply_to' email for a given order
    -- by joining its occasion and extracting the email from the occasion's 'data'.
    SELECT
        occ.data->>'reply_to'
    FROM
        eshop.orders AS ord
    JOIN
        public.occasions AS occ ON ord.occasion = occ.id
    WHERE
        ord.id = p_order_id;
$$;