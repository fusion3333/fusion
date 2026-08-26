import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL?.replace(/\/$/, '');

async function getPushToken() {
  if (Platform.OS === 'web') throw new Error('웹에서는 모바일 푸시 알림을 등록할 수 없습니다.');
  const projectId = Constants.expoConfig?.extra?.eas?.projectId ?? Constants.easConfig?.projectId;
  if (!projectId) throw new Error('EAS projectId가 필요합니다. 실제 기기 빌드 설정 후 알림을 활성화하세요.');
  return (await Notifications.getExpoPushTokenAsync({ projectId })).data;
}

export async function registerPushSubscription(regionCode: string) {
  if (!API_BASE_URL) throw new Error('API 서버 주소가 설정되지 않았습니다.');
  const token = await getPushToken();
  const response = await fetch(`${API_BASE_URL}/api/subscriptions`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ token, regionCode, platform: Platform.OS }) });
  if (!response.ok) throw new Error('알림 구독 등록에 실패했습니다.');
}

export async function unregisterPushSubscription(regionCode: string) {
  if (!API_BASE_URL) return;
  try {
    const token = await getPushToken();
    await fetch(`${API_BASE_URL}/api/subscriptions`, { method: 'DELETE', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ token, regionCode }) });
  } catch {
    // EAS 설정 전에는 로컬 상태만 비활성화할 수 있다.
  }
}
