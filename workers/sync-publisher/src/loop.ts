import { createPublisher } from './runtime.js';

const publisher = createPublisher();
let stopped = false;
process.on('SIGTERM', () => { stopped = true; });
process.on('SIGINT', () => { stopped = true; });

while (!stopped) {
  const started = Date.now();
  try {
    await publisher.runOnce();
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.stack : String(error)}\n`);
  }
  const remaining = Math.max(0, 5000 - (Date.now() - started));
  await new Promise((resolve) => setTimeout(resolve, remaining));
}
