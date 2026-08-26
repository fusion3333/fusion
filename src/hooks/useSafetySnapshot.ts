import { useQuery } from '@tanstack/react-query';
import { fetchSafetySnapshot } from '@/services/api';

export function useSafetySnapshot(regionCode: string) {
  return useQuery({
    queryKey: ['safety-snapshot', regionCode],
    queryFn: () => fetchSafetySnapshot(regionCode),
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });
}
