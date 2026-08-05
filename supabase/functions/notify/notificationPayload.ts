export interface NotificationPayloadInput {
  appId: string;
  defaultUrl: string;
  occasionLink: string;
  targetPath: string;
  installationGeneration?: string | null;
  recipient?: string | null;
  heading: string;
  content: string;
}

export function buildNotificationPayload(input: NotificationPayloadInput) {
  if (input.recipient) {
    return {
      app_id: input.appId,
      web_url:
        `${input.defaultUrl}/#/${input.occasionLink}/${input.targetPath}`,
      include_aliases: { external_id: input.recipient },
      target_channel: "push",
      headings: { en: input.heading },
      contents: { en: input.content },
    };
  }

  const filters: Array<Record<string, string>> = [];
  if (input.installationGeneration) {
    filters.push(
      {
        field: "tag",
        key: "app_generation",
        relation: "=",
        value: input.installationGeneration,
      },
      { operator: "AND" },
    );
  }
  filters.push({
    field: "tag",
    key: "occasion",
    relation: "=",
    value: input.occasionLink,
  });

  return {
    app_id: input.appId,
    filters,
    headings: { en: input.heading },
    contents: { en: input.content },
  };
}
