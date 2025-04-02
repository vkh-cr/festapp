CREATE OR REPLACE FUNCTION public.set_last_fetch_time(p_bank_account_id bigint)
RETURNS void AS $$
BEGIN
  UPDATE eshop.bank_accounts
  SET last_fetch_time = now()
  WHERE id = p_bank_account_id;
END;
$$ LANGUAGE plpgsql;