CREATE OR REPLACE FUNCTION public.get_occasion_user_email(
    p_occasion BIGINT,
    p_user UUID
)
RETURNS TEXT
LANGUAGE plpgsql
SET search_path = public, extensions
AS $$
DECLARE
    v_email TEXT;
BEGIN
    -- Try to get the email from the ticket associated with the occasion and user
    SELECT
        o.data->>'email'
    INTO
        v_email
    FROM
        public.occasion_users ou
    JOIN
        eshop.tickets t ON ou.ticket = t.id
    JOIN
        eshop.order_product_ticket opt ON t.id = opt.ticket
    JOIN
        eshop.orders o ON opt.order = o.id
    WHERE
        ou.occasion = p_occasion
    AND
        ou."user" = p_user
    AND
        ou.ticket IS NOT NULL
    LIMIT 1;

    -- If no email was found from the ticket, get it from user_info
    IF v_email IS NULL THEN
        SELECT
            email_readonly
        INTO
            v_email
        FROM
            public.user_info
        WHERE
            id = p_user;
    END IF;

    RETURN v_email;
END;
$$;