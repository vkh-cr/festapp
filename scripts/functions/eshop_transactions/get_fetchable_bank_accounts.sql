CREATE OR REPLACE FUNCTION public.get_fetchable_bank_accounts()
RETURNS TABLE (bank_account_id bigint, bank_secret text, account_type text) AS $$
BEGIN
  RETURN QUERY
  SELECT
    ba.id,
    s.secret,
    ba.type
  FROM eshop.bank_accounts ba
  JOIN eshop.secrets s ON ba.secret = s.id
  WHERE ba.is_fetch_enabled = true
    -- Check if last_fetch_time is either null or the waiting period has elapsed
    AND (ba.last_fetch_time IS NULL
         OR now() - ba.last_fetch_time >= (COALESCE(ba.min_fetch_wait_seconds, 0) || ' seconds')::interval)
    -- Ensure that the secret has not expired (if an expiry is set)
    AND (s.expiry_date IS NULL OR s.expiry_date > now());
END;
$$ LANGUAGE plpgsql;
