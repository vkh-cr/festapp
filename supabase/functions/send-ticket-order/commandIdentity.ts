export type TicketOrderCommandIdentity = {
  commandId: string;
  clientId: string;
};

export function resolveTicketOrderCommandIdentity(
  commandId: string | undefined,
  clientId: string | undefined,
  replacement: unknown,
  randomUuid: () => string = () => crypto.randomUUID(),
): TicketOrderCommandIdentity | null {
  if (replacement && (!commandId || !clientId)) return null;
  return {
    commandId: commandId || randomUuid(),
    clientId: clientId || randomUuid(),
  };
}
