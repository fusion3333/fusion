import * as Location from 'expo-location';
import { searchNationwideRegions, type NationwideRegion } from '@/services/regions';

function compact(value?: string | null) {
  return (value ?? '').replaceAll(' ', '').trim();
}

export async function detectSupportedRegion(): Promise<NationwideRegion> {
  const permission = await Location.requestForegroundPermissionsAsync();
  if (!permission.granted) throw new Error('위치 권한이 허용되지 않았습니다.');

  const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
  const addresses = await Location.reverseGeocodeAsync({ latitude: position.coords.latitude, longitude: position.coords.longitude });
  const address = addresses[0];
  if (!address) throw new Error('현재 위치의 행정구역을 확인하지 못했습니다.');

  const candidates = [
    [address.region, address.city ?? address.subregion, address.district].filter(Boolean).join(' '),
    [address.region, address.city ?? address.subregion].filter(Boolean).join(' '),
    String(address.city ?? address.subregion ?? ''),
  ].filter(Boolean);

  for (const query of candidates) {
    const regions = await searchNationwideRegions(query);
    if (!regions.length) continue;
    const compactQuery = compact(query);
    const exact = regions.find((region) => compact(region.name) === compactQuery);
    if (exact) return exact;
    const cityLevel = regions.find((region) => region.sigunguCode && region.sigunguCode !== '000' && region.eupmyeondongCode === '000');
    if (cityLevel) return cityLevel;
    return regions[0];
  }

  throw new Error(`현재 위치(${address.region ?? ''} ${address.city ?? address.subregion ?? ''})를 전국 행정구역 코드와 매칭하지 못했습니다.`);
}
