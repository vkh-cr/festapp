-- claims helping functions
-- install
CREATE OR REPLACE FUNCTION is_claims_admin() RETURNS "bool"
  LANGUAGE "plpgsql"
  AS $$
  BEGIN
    IF session_user = 'authenticator' THEN
      --------------------------------------------
      -- To disallow any authenticated app users
      -- from editing claims, delete the following
      -- block of code and replace it with:
      -- RETURN FALSE;
      --------------------------------------------
      IF extract(epoch from now()) > coalesce((current_setting('request.jwt.claims', true)::jsonb)->>'exp', '0')::numeric THEN
        return false; -- jwt expired
      END IF;
      If current_setting('request.jwt.claims', true)::jsonb->>'role' = 'service_role' THEN
        RETURN true; -- service role users have admin rights
      END IF;
      IF coalesce((current_setting('request.jwt.claims', true)::jsonb)->'app_metadata'->'is_admin', 'false')::bool THEN
        return true; -- user has is_claims_admin set to true
      ELSE
        return false; -- user does NOT have is_claims_admin set to true
      END IF;
      --------------------------------------------
      -- End of block
      --------------------------------------------
    ELSE -- not a user session, probably being called from a trigger or something
      return true;
    END IF;
  END;
$$;

CREATE OR REPLACE FUNCTION get_my_claims() RETURNS "jsonb"
    LANGUAGE "sql" STABLE
    AS $$
  select
  	coalesce(nullif(current_setting('request.jwt.claims', true), '')::jsonb -> 'app_metadata', '{}'::jsonb)::jsonb
$$;
CREATE OR REPLACE FUNCTION get_my_claim(claim TEXT) RETURNS "jsonb"
    LANGUAGE "sql" STABLE
    AS $$
  select
  	coalesce(nullif(current_setting('request.jwt.claims', true), '')::jsonb -> 'app_metadata' -> claim, null)
$$;

CREATE OR REPLACE FUNCTION get_claims(uid uuid) RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER SET search_path = public
    AS $$
    DECLARE retval jsonb;
    BEGIN
      IF NOT is_claims_admin() THEN
          RETURN '{"error":"access denied"}'::jsonb;
      ELSE
        select raw_app_meta_data from auth.users into retval where id = uid::uuid;
        return retval;
      END IF;
    END;
$$;

CREATE OR REPLACE FUNCTION get_claim(uid uuid, claim text) RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER SET search_path = public
    AS $$
    DECLARE retval jsonb;
    BEGIN
      IF NOT is_claims_admin() THEN
          RETURN '{"error":"access denied"}'::jsonb;
      ELSE
        select coalesce(raw_app_meta_data->claim, null) from auth.users into retval where id = uid::uuid;
        return retval;
      END IF;
    END;
$$;

CREATE OR REPLACE FUNCTION set_claim(uid uuid, claim text, value jsonb) RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER SET search_path = public
    AS $$
    BEGIN
      IF NOT is_claims_admin() THEN
          RETURN 'error: access denied';
      ELSE
        update auth.users set raw_app_meta_data =
          raw_app_meta_data ||
            json_build_object(claim, value)::jsonb where id = uid;
        return 'OK';
      END IF;
    END;
$$;

CREATE OR REPLACE FUNCTION delete_claim(uid uuid, claim text) RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER SET search_path = public
    AS $$
    BEGIN
      IF NOT is_claims_admin() THEN
          RETURN 'error: access denied';
      ELSE
        update auth.users set raw_app_meta_data =
          raw_app_meta_data - claim where id = uid;
        return 'OK';
      END IF;
    END;
$$;
NOTIFY pgrst, 'reload schema';

--uninstall
-- DROP FUNCTION get_my_claims;
-- DROP FUNCTION get_my_claim;
-- DROP FUNCTION get_claims;
-- DROP FUNCTION set_claim;
-- DROP FUNCTION delete_claim;
-- DROP FUNCTION is_claims_admin;
-- NOTIFY pgrst, 'reload schema';
--select set_claim('9e311817-3215-4454-91d3-ec33e2df1257', 'is_admin', 'true');
--select set_claim('25651d62-2649-4b95-9a16-8ba86efd01d4', 'is_editor', 'true');
