CREATE OR REPLACE FUNCTION public.get_bank_accounts_for_unit_management(p_unit_id bigint)
RETURNS TABLE (
    id bigint,
    account_number text,
    account_number_human_readable text,
    title text,
    priority int,
    type text,
    is_admin boolean,
    token_masked text,
    token_expiry_date timestamptz,
    supported_currencies text[],
    last_fetch_time timestamptz
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN QUERY
    SELECT
        ba.id,
        ba.account_number,
        ba.account_number_human_readable,
        ba.title,
        uba.priority,
        ba.type,
        EXISTS(SELECT 1 FROM eshop.bank_account_users bau WHERE bau.bank_account = ba.id AND bau."user" = auth.uid() AND bau.is_admin = true) as is_admin,
        CASE WHEN s.secret IS NULL THEN NULL
             WHEN length(s.secret) <= 4 THEN '************'
             ELSE '************' || right(s.secret, 4)
        END as token_masked,
        s.expiry_date as token_expiry_date,
        ba.supported_currencies,
        ba.last_fetch_time
    FROM eshop.bank_accounts ba
    JOIN eshop.unit_bank_accounts uba ON ba.id = uba.bank_account
    LEFT JOIN eshop.secrets s ON ba.secret = s.id
    WHERE uba.unit = p_unit_id
    ORDER BY uba.priority ASC, ba.id ASC;
END;
$$;
