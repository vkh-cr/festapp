CREATE OR REPLACE FUNCTION public.update_bank_account_token(
    p_bank_account_id bigint,
    p_token text,
    p_valid_until timestamptz DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    v_secret_id bigint;
BEGIN
    SELECT secret INTO v_secret_id FROM eshop.bank_accounts WHERE id = p_bank_account_id;

    -- Security Check: Caller must be an Admin of the bank account
    IF NOT EXISTS (
        SELECT 1 FROM eshop.bank_account_users 
        WHERE bank_account = p_bank_account_id AND "user" = auth.uid() AND is_admin = true
    ) THEN
        RAISE EXCEPTION 'Permission denied: Only bank account admins can update tokens.';
    END IF;

    -- Update validity date only if explicitly provided
    IF p_valid_until IS NOT NULL THEN
        UPDATE eshop.bank_accounts
        SET token_valid_until = p_valid_until,
            is_fetch_enabled = true,
            updated_at = NOW()
        WHERE id = p_bank_account_id;
    END IF;

    IF p_token IS NOT NULL AND p_token <> '' THEN
        IF v_secret_id IS NOT NULL THEN
            UPDATE eshop.secrets
            SET secret = p_token, created_at = now()
            WHERE id = v_secret_id;
            
            -- If token changed, we should reset valid_until unless explicit new date is provided
            -- Here we assume if p_token is passed, we update validity too.
            -- If p_valid_until is NULL (default), this clears it.
            UPDATE eshop.bank_accounts
            SET token_valid_until = p_valid_until,
                is_fetch_enabled = true,
                updated_at = NOW()
            WHERE id = p_bank_account_id;
        ELSE
            INSERT INTO eshop.secrets (secret)
            VALUES (p_token)
            RETURNING id INTO v_secret_id;

            UPDATE eshop.bank_accounts
            SET secret = v_secret_id,
                token_valid_until = p_valid_until,
                is_fetch_enabled = true,
                updated_at = NOW()
            WHERE id = p_bank_account_id;
        END IF;
    END IF;
END;
$$;
