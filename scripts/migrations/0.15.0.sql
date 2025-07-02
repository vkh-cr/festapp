DO $$
BEGIN
    -- Check if the column 'data' does not already exist in the 'log_emails' table
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'public'
        AND table_name = 'log_emails'
        AND column_name = 'data'
    ) THEN
        -- If the column does not exist, add it
        ALTER TABLE public.log_emails
        ADD COLUMN data jsonb NULL;

        -- Optional: Log a notice to the console that the column was added
        RAISE NOTICE 'Column "data" added to "public.log_emails".';
    ELSE
        -- Optional: Log a notice that the column already exists
        RAISE NOTICE 'Column "data" already exists in "public.log_emails".';
    END IF;
END;
$$;