CREATE OR REPLACE FUNCTION public.delete_autosave_history(p_occasion_id BIGINT)
RETURNS JSONB
LANGUAGE plpgsql
VOLATILE
SECURITY DEFINER
SET search_path = public, extensions
AS $$
BEGIN
    -- First, verify that the current user has editor permissions for the specified occasion.
    -- This prevents unauthorized users from deleting history.
    IF (SELECT get_is_editor_on_occasion(p_occasion_id)) <> TRUE THEN
        RETURN jsonb_build_object(
            'code', 403,
            'message', 'User is not authorized to delete autosave history for this occasion.'
        );
    END IF;

    -- If the user is authorized, delete all their 'AUTOSAVE' entries from the activity_history table
    -- that match the occasion ID and the current user's ID.
    DELETE FROM public.activity_history
    WHERE
        occasion_id = p_occasion_id AND
        history_type = 'AUTOSAVE' AND
        user_id = auth.uid(); -- Ensures users can only delete their own autosaves.

    -- Return a standard success response object.
    -- This response is sent whether rows were deleted or not, as the operation itself was successful.
    RETURN jsonb_build_object(
        'code', 200,
        'message', 'Autosave history has been cleared successfully.'
    );
END;
$$;