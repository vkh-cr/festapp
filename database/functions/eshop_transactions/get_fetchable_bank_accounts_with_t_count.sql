CREATE OR REPLACE FUNCTION public.get_fetchable_bank_accounts_with_t_count()
RETURNS TABLE (
    bank_account_id BIGINT,
    bank_secret TEXT,
    account_type TEXT,
    transaction_count_last_90_days INT
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    ba.id,
    s.secret,
    ba.type,
    -- This subquery counts transactions for each fetchable bank account
    -- over the last 90 days.
    (SELECT COUNT(*)::INT
     FROM eshop.transactions t
     WHERE t.bank_account_id = ba.id
       -- The number of days has been hardcoded to 90.
       AND t."date" >= NOW() - MAKE_INTERVAL(days := 90)
    ) AS transaction_count_last_90_days
  FROM eshop.bank_accounts ba
  JOIN eshop.secrets s ON ba.secret = s.id
  WHERE ba.is_fetch_enabled = TRUE
    -- Check if last_fetch_time is either null or the waiting period has elapsed
    AND (ba.last_fetch_time IS NULL
         OR NOW() - ba.last_fetch_time >= (COALESCE(ba.min_fetch_wait_seconds, 0) || ' seconds')::INTERVAL)
    -- Ensure that the secret has not expired (if an expiry is set)
    AND (s.expiry_date IS NULL OR s.expiry_date > NOW());
END;
$$ LANGUAGE plpgsql;