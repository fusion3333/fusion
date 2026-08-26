import type { NeighborhoodSafetySnapshot } from '@/domain/safety';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL?.replace(/\/$/, '');

export class SafetyApiError extends Error {}

export async function fetchSafetySnapshot(regionCode: string): Promise<NeighborhoodSafetySnapshot> {
  if (!API_BASE_URL) {
    throw new SafetyApiError('EXPO_PUBLIC_API_BASE_URL이 설정되지 않았습니다.');
  }

  const response = await fetch(`${API_BASE_URL}/api/safety?regionCode=${encodeURIComponent(regionCode)}`);
  if (!response.ok) {
    throw new SafetyApiError(`안전정보를 불러오지 못했습니다. (${response.status})`);
  }

  return response.json() as Promise<NeighborhoodSafetySnapshot>;
}
