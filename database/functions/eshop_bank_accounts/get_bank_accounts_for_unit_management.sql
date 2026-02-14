CREATE OR REPLACE FUNCTION get_bank_accounts_for_unit_management(p_unit_id bigint)
RETURNS TABLE (
    id bigint,
    account_number text,
    title text,
    type text,
    is_admin boolean,
    token_masked text,
    token_expiry_date timestamptz,
    supported_currencies text[]
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
BEGIN
    RETURN QUERY
    SELECT
        ba.id,
        ba.account_number,
        ba.title,
        ba.type,
        EXISTS (
            SELECT 1
            FROM eshop.bank_account_users bau
            WHERE bau.bank_account = ba.id
            AND bau."user" = auth.uid()
            AND bau.is_admin = true
        ) as is_admin,
        CASE
            WHEN s.secret IS NOT NULL THEN
                '************' || right(s.secret, 4)
            ELSE NULL
        END as token_masked,
        s.expiry_date as token_expiry_date,
        ba.supported_currencies
    FROM eshop.bank_accounts ba
    JOIN eshop.unit_bank_accounts uba ON ba.id = uba.bank_account
    LEFT JOIN eshop.secrets s ON ba.secret = s.id
    WHERE uba.unit = p_unit_id
    AND ba.type != 'CASH'; -- Exclude Cash Accounts from management list
END;
$$;
