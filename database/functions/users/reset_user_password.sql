CREATE OR REPLACE FUNCTION reset_user_password(p_user_id uuid, p_password text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  v_current_user_id uuid := auth.uid();
  v_has_permission boolean := false;
  v_encrypted_pw text;
  v_is_unit_manager_path boolean;
  v_is_occasion_manager_path boolean;
  v_target_has_elevated_privileges boolean;
  v_target_is_org_admin boolean;
BEGIN
    -- =================================================================
    -- 1. INPUT VALIDATION
    -- =================================================================
    IF p_user_id IS NULL THEN
        RAISE EXCEPTION '%',
            jsonb_build_object('code', 4000, 'message', 'Input data is invalid: User ID is missing')::text;
    END IF;

    IF p_password IS NULL OR trim(p_password) = '' THEN
        RAISE EXCEPTION '%',
            jsonb_build_object('code', 4000, 'message', 'Input data is invalid: Password cannot be empty')::text;
    END IF;

    -- =================================================================
    -- 2. USER EXISTENCE CHECK
    -- =================================================================
    IF NOT EXISTS (SELECT 1 FROM auth.users WHERE id = p_user_id) THEN
        RAISE EXCEPTION '%',
            jsonb_build_object('code', 4040, 'message', 'User not found')::text;
    END IF;


    -- =================================================================
    -- 3. PERMISSION CHECKS (HIERARCHICAL LOGIC)
    -- =================================================================
    -- The function checks for permissions in a specific, prioritized order.

    -- Priority 1: Self-Reset. A user can always change their own password.
    IF v_current_user_id = p_user_id THEN
        v_has_permission := TRUE;
    END IF;

    -- Priority 2: Organization Admin. A top-level admin has the highest level of privilege.
    IF NOT v_has_permission THEN
        SELECT EXISTS (
            SELECT 1
            FROM public.user_info cui
            JOIN public.organization_users cou ON cui.id = cou."user"
            JOIN public.user_info tui ON tui.organization = cou.organization
            WHERE cui.id = v_current_user_id
              AND tui.id = p_user_id
              AND cou.is_admin = TRUE
        ) INTO v_has_permission;
    END IF;

    -- Priority 3: Unit Manager Path (with new negative check).
    IF NOT v_has_permission THEN
        -- Step 3a: Check if the current user has Unit Manager rights over the target user.
        WITH target_user_units AS (
            SELECT unit AS unit_id FROM public.unit_users WHERE "user" = p_user_id
            UNION
            SELECT o.unit AS unit_id FROM public.occasion_users ou JOIN public.occasions o ON ou.occasion = o.id WHERE ou."user" = p_user_id
        )
        SELECT EXISTS (
            SELECT 1
            FROM public.unit_users uu
            JOIN target_user_units tuu ON uu.unit = tuu.unit_id
            WHERE uu."user" = v_current_user_id AND uu.is_manager = TRUE
        ) INTO v_is_unit_manager_path;

        IF v_is_unit_manager_path THEN
            -- Step 3b: **NEW NEGATIVE CHECK**. A Unit Manager cannot change an Org Admin's password.
            SELECT EXISTS (
                SELECT 1 FROM public.organization_users
                WHERE "user" = p_user_id AND is_admin = TRUE
            ) INTO v_target_is_org_admin;

            -- Grant permission only if the target user is NOT an Organization Admin.
            IF NOT v_target_is_org_admin THEN
                v_has_permission := TRUE;
            END IF;
        END IF;
    END IF;

    -- Priority 4: Occasion Manager Path (with expanded security check).
    IF NOT v_has_permission THEN
        -- Step 4a: Check if a direct manager->user link exists on any single occasion.
        SELECT EXISTS (
          SELECT 1 FROM public.occasion_users AS manager_ou
          JOIN public.occasion_users AS target_ou ON manager_ou.occasion = target_ou.occasion
          WHERE manager_ou."user" = v_current_user_id
            AND manager_ou.is_manager = TRUE
            AND target_ou."user" = p_user_id
        ) INTO v_is_occasion_manager_path;

        IF v_is_occasion_manager_path THEN
            -- Step 4b: EXPANDED NEGATIVE CHECK. Target must not have any elevated privileges.
            SELECT EXISTS (
              SELECT 1 FROM public.unit_users
              WHERE "user" = p_user_id AND (is_manager = TRUE OR is_editor = TRUE OR is_editor_view = TRUE)
            ) INTO v_target_has_elevated_privileges;

            IF NOT v_target_has_elevated_privileges THEN
                SELECT EXISTS (
                    SELECT 1 FROM public.organization_users
                    WHERE "user" = p_user_id AND is_admin = TRUE
                ) INTO v_target_has_elevated_privileges;
            END IF;

            IF NOT v_target_has_elevated_privileges THEN
                v_has_permission := TRUE;
            END IF;
        END IF;
    END IF;

    -- Final permission enforcement.
    IF NOT v_has_permission THEN
         RAISE EXCEPTION '%',
            jsonb_build_object('code', 4030, 'message', 'Permission denied. You do not have the required privileges to reset this user''s password.')::text;
    END IF;


    -- =================================================================
    -- 4. PASSWORD UPDATE
    -- =================================================================
    v_encrypted_pw := crypt(p_password, gen_salt('bf'));

    UPDATE auth.users
    SET encrypted_password = v_encrypted_pw
    WHERE auth.users.id = p_user_id;

    -- =================================================================
    -- 5. SUCCESS RESPONSE
    -- =================================================================
    RETURN jsonb_build_object('code', 200, 'message', 'Password has been successfully updated.');

EXCEPTION
    WHEN OTHERS THEN
        RETURN CASE
            WHEN left(SQLERRM, 1) = '{' THEN SQLERRM::jsonb
            ELSE jsonb_build_object('code', 5000, 'message', SQLERRM)
        END;
END;
$$;