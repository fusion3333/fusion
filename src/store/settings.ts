import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_REGION, REGIONS } from '@/config/regions';

interface SelectedRegion {
  code: string;
  name: string;
  policeStation?: string;
}

interface SettingsState {
  regionCode: string;
  regionName: string;
  notificationsEnabled: boolean;
  setRegionCode: (regionCode: string) => void;
  setRegion: (region: SelectedRegion) => void;
  setNotificationsEnabled: (enabled: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      regionCode: DEFAULT_REGION.code,
      regionName: DEFAULT_REGION.name,
      notificationsEnabled: false,
      setRegionCode: (regionCode) => {
        const known = REGIONS.find((region) => region.code === regionCode);
        set({ regionCode, regionName: known?.name ?? regionCode });
      },
      setRegion: (region) => set({ regionCode: region.code, regionName: region.name }),
      setNotificationsEnabled: (notificationsEnabled) => set({ notificationsEnabled }),
    }),
    { name: 'neighborhood-safety-settings', storage: createJSONStorage(() => AsyncStorage) },
  ),
);

export function getSelectedRegion(regionCode: string, regionName?: string) {
  return REGIONS.find((region) => region.code === regionCode) ?? {
    code: regionCode,
    name: regionName ?? regionCode,
    shortName: regionName ?? regionCode,
  };
}
