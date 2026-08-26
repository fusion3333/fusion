import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { Card, ScreenTitle } from '@/components/ui';
import { REGIONS } from '@/config/regions';
import { useSettingsStore } from '@/store/settings';

export default function SettingsScreen() {
  const regionCode = useSettingsStore((state) => state.regionCode);
  const setRegionCode = useSettingsStore((state) => state.setRegionCode);
  const notificationsEnabled = useSettingsStore((state) => state.notificationsEnabled);
  const setNotificationsEnabled = useSettingsStore((state) => state.setNotificationsEnabled);

  async function toggleNotifications(value: boolean) {
    if (value) {
      const permission = await Notifications.requestPermissionsAsync();
      setNotificationsEnabled(permission.granted);
      return;
    }
    setNotificationsEnabled(false);
  }

  async function requestLocation() {
    await Location.requestForegroundPermissionsAsync();
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.back} onPress={() => router.back()}>← 돌아가기</Text>
      <ScreenTitle title="설정" subtitle="관심 지역과 알림을 관리합니다." />

      <Card>
        <Text style={styles.sectionTitle}>관심 지역</Text>
        {REGIONS.map((region) => (
          <Pressable key={region.code} style={styles.row} onPress={() => setRegionCode(region.code)}>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowTitle}>{region.name}</Text>
              <Text style={styles.muted}>{region.policeStation ?? '복수 관할 또는 매핑 준비 중'}</Text>
            </View>
            <Text style={region.code === regionCode ? styles.selected : styles.unselected}>{region.code === regionCode ? '●' : '○'}</Text>
          </Pressable>
        ))}
      </Card>

      <Card>
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.rowTitle}>데이터 갱신 알림</Text>
            <Text style={styles.muted}>관심 지역의 공식 통계가 새로 게시될 때 알림</Text>
          </View>
          <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
        </View>
      </Card>

      <Card>
        <Text style={styles.rowTitle}>현재 위치 권한</Text>
        <Text style={styles.muted}>향후 GPS 좌표를 행정구역으로 변환할 때 사용합니다. 이동경로를 저장하지 않습니다.</Text>
        <Pressable onPress={requestLocation}><Text style={styles.link}>위치 권한 요청</Text></Pressable>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F7FA' },
  content: { padding: 18, paddingTop: 62, paddingBottom: 40, gap: 14 },
  back: { color: '#2563EB', fontWeight: '700', marginBottom: 6 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#111827' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 8 },
  rowTitle: { fontSize: 15, fontWeight: '700', color: '#111827' },
  muted: { fontSize: 12, lineHeight: 18, color: '#6B7280' },
  selected: { color: '#2563EB', fontSize: 22 },
  unselected: { color: '#9CA3AF', fontSize: 22 },
  link: { color: '#2563EB', fontWeight: '700', marginTop: 6 },
});
