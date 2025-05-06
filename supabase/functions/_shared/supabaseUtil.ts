import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

/**
 * Gets the authenticated Supabase user.
 * @param authorizationHeader - The authorization header from the request.
 * @returns A promise that resolves to the authenticated user.
 */
export async function getSupabaseUser(authorizationHeader: string) {
  const supabaseUser = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    {
      global: {
        headers: { Authorization: authorizationHeader },
      },
    }
  );

  const { data: user, error: userError } = await supabaseUser.auth.getUser();
  if (userError || !user) {
    throw new Error("Unauthorized");
  }
  return user;
}

/**
 * Checks if the user is an editor for the given occasion.
 * @param userId - The UUID of the user.
 * @param occasionId - The ID of the occasion.
 * @returns A Promise that resolves to a boolean indicating editor status.
 */
export async function isUserEditor(userId: string, occasionId: bigint): Promise<boolean> {
  const { data, error } = await supabaseAdmin
    .from("occasion_users")
    .select("is_editor")
    .eq("user", userId)
    .eq("occasion", occasionId)
    .single();

  if (error || !data) {
    console.error("Error fetching user role:", error);
    return false;
  }
  return data.is_editor;
}

/**
 * Checks if the user is an editor order for the given occasion.
 * @param userId - The UUID of the user.
 * @param occasionId - The ID of the occasion.
 * @returns A Promise that resolves to a boolean indicating editor status.
 */
export async function isUserEditorOrder(userId: string, occasionId: bigint): Promise<boolean> {
  const { data, error } = await supabaseAdmin
    .from("occasion_users")
    .select("is_editor_order")
    .eq("user", userId)
    .eq("occasion", occasionId)
    .single();

  if (error || !data) {
    console.error("Error fetching user role:", error);
    return false;
  }
  return data.is_editor_order;
}

/**
 * Calls the stored function get_email_template_and_wrapper in Postgres.
 * The function returns a JSON object with keys "template" and "wrapper".
 *
 * @param p_code - The email template code (e.g., "RESET_PASSWORD").
 * @param p_context - A JSON object with keys such as "occasion", "unit", and "organization".
 * @returns A promise that resolves to the email template and wrapper.
 */
export async function getEmailTemplateAndWrapper(p_code: string, p_context: any) {
  const { data, error } = await supabaseAdmin.rpc('get_email_template_and_wrapper', { p_code, p_context });
  if (error) {
    console.error('Error calling get_email_template_and_wrapper:', error);
    throw error;
  }

  return data;
}


export const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);