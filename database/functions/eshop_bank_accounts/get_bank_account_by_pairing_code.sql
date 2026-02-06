CREATE OR REPLACE FUNCTION public.get_bank_account_by_pairing_code(p_code text)
RETURNS TABLE (
    id bigint,
    type text,
    account_number text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, eshop, extensions
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        ba.id,
        ba.type,
        ba.account_number
    FROM eshop.bank_accounts ba
    WHERE LOWER(ba.pairing_code) = LOWER(TRIM(p_code));
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_bank_account_by_pairing_code TO service_role;
GRANT EXECUTE ON FUNCTION public.get_bank_account_by_pairing_code TO anon;
GRANT EXECUTE ON FUNCTION public.get_bank_account_by_pairing_code TO authenticated;
