import { getSupabaseUser, isUserEditorOrder, supabaseAdmin } from "./supabaseUtil.ts";

/**
 * Custom error class for authorization failures.
 * Includes an HTTP status code.
 */
export class AuthError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "AuthError";
    this.status = status;
  }
}

interface AuthParams {
  requestSecret?: string;
  authorizationHeader?: string | null;
  occasionId?: number;
}

/**
 * Authorizes a request by checking for a valid secret or editor permissions.
 * Throws an AuthError if authorization fails.
 * @param {AuthParams} params - The authorization parameters.
 */
export async function authorizeRequest({ requestSecret, authorizationHeader, occasionId }: AuthParams): Promise<void> {
  // Path 1: Authorization via request secret (for cron jobs, etc.)
  if (requestSecret) {
    const { data: secretValid, error: secretError } = await supabaseAdmin.rpc("check_request_secret", { p_secret: requestSecret });
    if (secretError || !secretValid) {
      throw new AuthError("Invalid request secret", 403);
    }
    return; // Success
  }

  // Path 2: Authorization via user token and editor role on a specific occasion
  if (authorizationHeader && occasionId) {
    const user = await getSupabaseUser(authorizationHeader);
    if (!user) {
      throw new AuthError("Unauthorized", 401);
    }
    const userId = user.user.id;
    const userIsEditor = await isUserEditorOrder(userId, occasionId);
    if (!userIsEditor) {
      throw new AuthError("Forbidden: Not an editor", 403);
    }
    return; // Success
  }

  // If neither valid path's parameters are met, fail the request.
  throw new AuthError("Invalid authorization credentials provided", 401);
}