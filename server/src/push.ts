import { subscriptionsForRegion } from './subscriptions.js';

export async function sendRegionUpdate(regionCode: string, title: string, body: string, period: string) {
  const subscriptions = await subscriptionsForRegion(regionCode);
  if (!subscriptions.length) return { sent: 0 };
  const messages = subscriptions.map((sub) => ({ to: sub.token, sound: 'default', title, body, data: { regionCode, period } }));
  const response = await fetch('https://exp.host/--/api/v2/push/send', { method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json', 'accept-encoding': 'gzip, deflate' }, body: JSON.stringify(messages) });
  if (!response.ok) throw new Error(`Expo Push API 오류: ${response.status}`);
  return { sent: messages.length, result: await response.json() };
}
