import type { DeliverEmailInput } from "../_shared/emailDelivery.ts";

export const csmOrganizationId = 9;

export function isCsmOrganization(organizationId: unknown) {
  return organizationId === csmOrganizationId;
}

export type AppLinksDeliveryInput = {
  userId: string;
  occasionId: number;
  unitId: number | null;
  organizationId: number;
  deliveryEmail: string;
  appName: string;
  appLinks: string;
  fromEmail: string;
};

export type AppLinksDeliveryDependencies = {
  deliverEmail(input: DeliverEmailInput): Promise<unknown>;
  markSent(occasionId: number, userId: string): Promise<void>;
};

export class AppLinksStatusUpdateError extends Error {
  constructor(cause: unknown) {
    super("Application links were delivered but the status update failed", {
      cause,
    });
    this.name = "AppLinksStatusUpdateError";
  }
}

export async function deliverAppLinks(
  input: AppLinksDeliveryInput,
  dependencies: AppLinksDeliveryDependencies,
) {
  await dependencies.deliverEmail({
    to: input.deliveryEmail,
    templateCode: "APP_LINKS",
    context: {
      organization: input.organizationId,
      occasion: input.occasionId,
      unit: input.unitId,
    },
    substitutions: { appLinks: input.appLinks },
    from: `${input.appName} | Festapp <${input.fromEmail}>`,
  });
  let lastStatusError: unknown;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      await dependencies.markSent(input.occasionId, input.userId);
      return;
    } catch (error) {
      lastStatusError = error;
    }
  }
  throw new AppLinksStatusUpdateError(lastStatusError);
}
