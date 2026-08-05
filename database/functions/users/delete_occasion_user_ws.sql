CREATE OR REPLACE FUNCTION public.delete_occasion_user_ws(usr_to_delete uuid, occasion_id bigint)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
BEGIN
    IF NOT (public.get_is_manager_on_occasion(occasion_id)
        OR public.get_is_admin_on_occasion(occasion_id)) THEN
        RAISE insufficient_privilege USING MESSAGE='occasion manager required';
    END IF;
    IF NOT EXISTS (SELECT 1 FROM public.occasion_users ou
        WHERE ou.occasion=occasion_id AND ou."user"=usr_to_delete) THEN
        RAISE invalid_parameter_value USING MESSAGE='target is not an occasion member';
    END IF;
    PERFORM public.delete_occasion_user(usr_to_delete,occasion_id);
END;
$$;

REVOKE ALL ON FUNCTION public.delete_occasion_user_ws(uuid,bigint)
  FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.delete_occasion_user_ws(uuid,bigint)
  TO authenticated;
