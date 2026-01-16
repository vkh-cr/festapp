CREATE OR REPLACE FUNCTION public.link_bank_account_to_unit(
    p_bank_account_id bigint,
    p_unit_id bigint,
    p_priority int
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Strict Check: User must be a MANAGER of the unit to link/unlink bank accounts
    PERFORM check_is_manager_on_unit(p_unit_id);

    -- (BA Admin check moved inside the linking block)

    IF p_priority IS NULL THEN
        -- Unlink
        DELETE FROM eshop.unit_bank_accounts
        WHERE unit = p_unit_id AND bank_account = p_bank_account_id;
    ELSE
        -- Strict Check: User must also be an ADMIN of the bank account to LINK/UPDATE it
        IF NOT EXISTS (
            SELECT 1 FROM eshop.bank_account_users 
            WHERE bank_account = p_bank_account_id AND "user" = auth.uid() AND is_admin = true
        ) THEN
            RAISE EXCEPTION 'User is not an admin of this bank account.';
        END IF;

        -- Upsert Link
        IF EXISTS (SELECT 1 FROM eshop.unit_bank_accounts WHERE unit = p_unit_id AND bank_account = p_bank_account_id) THEN
            UPDATE eshop.unit_bank_accounts
            SET priority = p_priority
            WHERE unit = p_unit_id AND bank_account = p_bank_account_id;
        ELSE
            INSERT INTO eshop.unit_bank_accounts (unit, bank_account, priority)
            VALUES (p_unit_id, p_bank_account_id, p_priority);
        END IF;

        -- Ensure Creator is Admin (if they are linking, they should be able to manage permissions)
        -- NOTE: If they are linking an existing account where they are already admin, this is redundant but safe.
        IF NOT EXISTS (SELECT 1 FROM eshop.bank_account_users WHERE bank_account = p_bank_account_id AND "user" = auth.uid()) THEN
             INSERT INTO eshop.bank_account_users (bank_account, "user", is_admin, is_support)
             VALUES (p_bank_account_id, auth.uid(), true, true);
        END IF;
    END IF;
END;
$$;
