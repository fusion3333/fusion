import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_REGION, REGIONS } from '@/config/regions';

interface SettingsState {
  regionCode: string;
  notificationsEnabled: boolean;
  setRegionCode: (regionCode: string) => void;
  setNotificationsEnabled: (enabled: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      regionCode: DEFAULT_REGION.code,
      notificationsEnabled: false,
      setRegionCode: (regionCode) => set({ regionCode }),
      setNotificationsEnabled: (notificationsEnabled) => set({ notificationsEnabled }),
    }),
    {
      name: 'neighborhood-safety-settings',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export function getSelectedRegion(regionCode: string) {
  return REGIONS.find((region) => region.code === regionCode) ?? DEFAULT_REGION;
}
