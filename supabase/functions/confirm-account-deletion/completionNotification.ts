export type CompletionNotification = {
  to: string;
  templateCode: "ACCOUNT_DELETION_COMPLETE";
  context: { organization: number };
  substitutions: { appName: "CSM Ostrava" };
};

type CompletionJob = {
  completionEmail?: unknown;
  organization: number;
};

export async function sendCompletionNotification(
  job: CompletionJob,
  deliver: (message: CompletionNotification) => Promise<unknown>,
): Promise<boolean> {
  if (typeof job.completionEmail !== "string" || !job.completionEmail) {
    return false;
  }
  await deliver({
    to: job.completionEmail,
    templateCode: "ACCOUNT_DELETION_COMPLETE",
    context: { organization: job.organization },
    substitutions: { appName: "CSM Ostrava" },
  });
  return true;
}
