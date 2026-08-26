import fs from 'node:fs/promises';
import path from 'node:path';

export interface Subscription { token: string; regionCode: string; platform?: string; createdAt: string; }
const file = process.env.SUBSCRIPTIONS_FILE ?? path.resolve('data/subscriptions.json');

async function readAll(): Promise<Subscription[]> {
  try { return JSON.parse(await fs.readFile(file, 'utf8')) as Subscription[]; } catch { return []; }
}
async function writeAll(rows: Subscription[]) { await fs.mkdir(path.dirname(file), { recursive: true }); await fs.writeFile(file, JSON.stringify(rows, null, 2)); }

export async function addSubscription(input: Omit<Subscription, 'createdAt'>) {
  const rows = await readAll();
  if (!rows.some((row) => row.token === input.token && row.regionCode === input.regionCode)) rows.push({ ...input, createdAt: new Date().toISOString() });
  await writeAll(rows);
}
export async function removeSubscription(token: string, regionCode: string) { await writeAll((await readAll()).filter((row) => !(row.token === token && row.regionCode === regionCode))); }
export async function subscriptionsForRegion(regionCode: string) { return (await readAll()).filter((row) => row.regionCode === regionCode); }
