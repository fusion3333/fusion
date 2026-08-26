import * as Location from 'expo-location';
import { REGIONS, type RegionOption } from '@/config/regions';

function normalize(value?: string | null) {
  return (value ?? '').replaceAll(' ', '').replace(/(특별시|광역시|특별자치시|특별자치도|도)$/u, '').replace(/(시|군|구)$/u, '');
}

export async function detectSupportedRegion(): Promise<RegionOption> {
  const permission = await Location.requestForegroundPermissionsAsync();
  if (!permission.granted) throw new Error('위치 권한이 허용되지 않았습니다.');

  const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
  const addresses = await Location.reverseGeocodeAsync({ latitude: position.coords.latitude, longitude: position.coords.longitude });
  const address = addresses[0];
  if (!address) throw new Error('현재 위치의 행정구역을 확인하지 못했습니다.');

  const city = normalize(address.city ?? address.subregion);
  const district = normalize(address.district ?? address.subregion);
  const match = REGIONS.find((region) => {
    const target = normalize(region.shortName);
    return city === target || district === target;
  });

  if (!match) throw new Error(`현재 위치(${address.region ?? ''} ${address.city ?? address.subregion ?? ''})는 아직 지원 지역이 아닙니다.`);
  return match;
}
