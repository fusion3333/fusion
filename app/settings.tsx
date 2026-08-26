import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { Card, ScreenTitle } from '@/components/ui';
import { REGIONS } from '@/config/regions';
import { detectSupportedRegion } from '@/services/location';
import { registerPushSubscription, unregisterPushSubscription } from '@/services/notifications';
import { useSettingsStore } from '@/store/settings';

export default function SettingsScreen() {
  const regionCode = useSettingsStore((state) => state.regionCode);
  const setRegionCode = useSettingsStore((state) => state.setRegionCode);
  const notificationsEnabled = useSettingsStore((state) => state.notificationsEnabled);
  const setNotificationsEnabled = useSettingsStore((state) => state.setNotificationsEnabled);
  const [locating, setLocating] = useState(false);

  async function toggleNotifications(value: boolean) {
    try {
      if (value) {
        const permission = await Notifications.requestPermissionsAsync();
        if (!permission.granted) throw new Error('알림 권한이 허용되지 않았습니다.');
        await registerPushSubscription(regionCode);
        setNotificationsEnabled(true);
      } else {
        await unregisterPushSubscription(regionCode);
        setNotificationsEnabled(false);
      }
    } catch (error) {
      setNotificationsEnabled(false);
      Alert.alert('알림 설정', error instanceof Error ? error.message : '알림 설정에 실패했습니다.');
    }
  }

  async function useCurrentLocation() {
    setLocating(true);
    try {
      const region = await detectSupportedRegion();
      setRegionCode(region.code);
      Alert.alert('현재 위치', `${region.name}(으)로 관심 지역을 설정했습니다.`);
    } catch (error) {
      Alert.alert('현재 위치', error instanceof Error ? error.message : '위치를 확인하지 못했습니다.');
    } finally {
      setLocating(false);
    }
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.back} onPress={() => router.back()}>← 돌아가기</Text>
      <ScreenTitle title="설정" subtitle="관심 지역과 알림을 관리합니다." />
      <Card><Text style={styles.sectionTitle}>관심 지역</Text><Pressable onPress={useCurrentLocation} disabled={locating}><Text style={styles.link}>{locating ? '현재 위치 확인 중…' : '◎ 현재 위치로 자동 선택'}</Text></Pressable>{REGIONS.map((region) => <Pressable key={region.code} style={styles.row} onPress={() => setRegionCode(region.code)}><View style={{ flex: 1 }}><Text style={styles.rowTitle}>{region.name}</Text><Text style={styles.muted}>{region.policeStation ?? '복수 관할 또는 매핑 준비 중'}</Text></View><Text style={region.code === regionCode ? styles.selected : styles.unselected}>{region.code === regionCode ? '●' : '○'}</Text></Pressable>)}</Card>
      <Card><View style={styles.row}><View style={{ flex: 1 }}><Text style={styles.rowTitle}>데이터 갱신 알림</Text><Text style={styles.muted}>관심 지역의 공식 통계가 새로 게시될 때 알림</Text></View><Switch value={notificationsEnabled} onValueChange={toggleNotifications} /></View></Card>
      <Card><Text style={styles.rowTitle}>개인정보 원칙</Text><Text style={styles.muted}>위치는 지역 판별에만 사용하고 이동경로를 만들지 않습니다. 서버에는 관심 행정구역과 푸시 토큰만 등록하도록 설계합니다.</Text></Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({ screen: { flex: 1, backgroundColor: '#F5F7FA' }, content: { padding: 18, paddingTop: 62, paddingBottom: 40, gap: 14 }, back: { color: '#2563EB', fontWeight: '700', marginBottom: 6 }, sectionTitle: { fontSize: 18, fontWeight: '800', color: '#111827' }, row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 8 }, rowTitle: { fontSize: 15, fontWeight: '700', color: '#111827' }, muted: { fontSize: 12, lineHeight: 18, color: '#6B7280' }, selected: { color: '#2563EB', fontSize: 22 }, unselected: { color: '#9CA3AF', fontSize: 22 }, link: { color: '#2563EB', fontWeight: '700', marginVertical: 8 } });
