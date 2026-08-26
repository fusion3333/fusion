import type { CrimeCategory, NeighborhoodSafetySnapshot } from '@/domain/safety';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL?.replace(/\/$/, '');
export class SafetyApiError extends Error {}

async function apiFetch<T>(path: string): Promise<T> {
  if (!API_BASE_URL) throw new SafetyApiError('EXPO_PUBLIC_API_BASE_URL이 설정되지 않았습니다.');
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, { signal: controller.signal });
    if (!response.ok) throw new SafetyApiError(`API 요청 실패 (${response.status})`);
    return response.json() as Promise<T>;
  } catch (error) {
    if (error instanceof SafetyApiError) throw error;
    throw new SafetyApiError(error instanceof Error && error.name === 'AbortError' ? '서버 응답 시간이 초과되었습니다.' : '서버에 연결할 수 없습니다.');
  } finally {
    clearTimeout(timer);
  }
}

export function fetchSafetySnapshot(regionCode: string): Promise<NeighborhoodSafetySnapshot> {
  return apiFetch(`/api/safety?regionCode=${encodeURIComponent(regionCode)}`);
}

export interface CrimeHistoryBlock {
  period: string;
  policeStation: string;
  status?: 'published' | 'provisional';
  source: string;
  rows: Array<{ category: CrimeCategory; incidents: number; arrests?: number; arrestees?: number }>;
}

export function fetchCrimeHistory(regionCode: string): Promise<{ regionName: string; policeStation: string; history: CrimeHistoryBlock[] }> {
  return apiFetch(`/api/crime-history?regionCode=${encodeURIComponent(regionCode)}`);
}
