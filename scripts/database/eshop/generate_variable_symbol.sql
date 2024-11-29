CREATE OR REPLACE FUNCTION generate_variable_symbol(bank_account_id BIGINT)
RETURNS BIGINT AS $$
DECLARE
    v_symbol BIGINT;
    digit_count INT := 4;
    attempt_count INT := 0;
    max_attempts INT := 1; -- Maximum allowed attempts
BEGIN
    LOOP
        -- Generate a random number with the current digit count
        v_symbol := FLOOR(RANDOM() * POWER(10, digit_count - 1)) + POWER(10, digit_count - 1);

        -- Ensure uniqueness within the bank_account
        IF NOT EXISTS (
            SELECT 1
            FROM eshop.payment_info
            WHERE v_symbol = v_symbol AND bank_account = bank_account_id
        ) THEN
            RETURN v_symbol; -- Return the unique variable symbol
        END IF;

        -- Increment attempt count and adjust digit count after each failure
        attempt_count := attempt_count + 1;

        -- Extend digit count after each failure
        IF attempt_count >= max_attempts THEN
            digit_count := digit_count + 1;
            attempt_count := 0; -- Reset attempt count for the extended digit count
        END IF;

        -- Fail entirely if the system cannot generate a unique symbol after many attempts
        IF digit_count > 15 THEN -- Arbitrary upper limit for digit count
            RAISE EXCEPTION 'Failed to generate unique variable symbol after too many attempts.';
        END IF;
    END LOOP;
END;
$$ LANGUAGE plpgsql;
