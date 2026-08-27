import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Card, ScreenTitle } from '@/components/ui';
import { detectSupportedRegion } from '@/services/location';
import { registerPushSubscription, unregisterPushSubscription } from '@/services/notifications';
import { searchNationwideRegions, type NationwideRegion } from '@/services/regions';
import { useSettingsStore } from '@/store/settings';

export default function SettingsScreen() {
  const regionCode = useSettingsStore((state) => state.regionCode);
  const regionName = useSettingsStore((state) => state.regionName);
  const setRegion = useSettingsStore((state) => state.setRegion);
  const notificationsEnabled = useSettingsStore((state) => state.notificationsEnabled);
  const setNotificationsEnabled = useSettingsStore((state) => state.setNotificationsEnabled);
  const [locating, setLocating] = useState(false);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<NationwideRegion[]>([]);

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
      setRegion({ code: region.code, name: region.name });
      Alert.alert('현재 위치', `${region.name}(으)로 관심 지역을 설정했습니다.`);
    } catch (error) {
      Alert.alert('현재 위치', error instanceof Error ? error.message : '위치를 확인하지 못했습니다.');
    } finally { setLocating(false); }
  }

  async function search() {
    if (!query.trim()) return;
    setSearching(true);
    try {
      const rows = await searchNationwideRegions(query.trim());
      setResults(rows.filter((row) => row.sigunguCode !== '000' || row.eupmyeondongCode !== '000').slice(0, 50));
      if (!rows.length) Alert.alert('지역 검색', '검색 결과가 없습니다.');
    } catch (error) {
      Alert.alert('지역 검색', error instanceof Error ? error.message : '지역 검색에 실패했습니다.');
    } finally { setSearching(false); }
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.back} onPress={() => router.back()}>← 돌아가기</Text>
      <ScreenTitle title="설정" subtitle="전국 관심 지역과 알림을 관리합니다." />

      <Card>
        <Text style={styles.sectionTitle}>현재 관심 지역</Text>
        <Text style={styles.current}>{regionName}</Text>
        <Pressable onPress={useCurrentLocation} disabled={locating}><Text style={styles.link}>{locating ? '현재 위치 확인 중…' : '◎ 현재 위치로 자동 선택'}</Text></Pressable>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>전국 지역 검색</Text>
        <TextInput value={query} onChangeText={setQuery} onSubmitEditing={search} placeholder="예: 서울 강남구, 부산 해운대구, 양주시" style={styles.input} returnKeyType="search" />
        <Pressable style={styles.searchButton} onPress={search} disabled={searching}><Text style={styles.searchButtonText}>{searching ? '검색 중…' : '검색'}</Text></Pressable>
        {results.map((region) => (
          <Pressable key={region.code} style={styles.row} onPress={() => { setRegion({ code: region.code, name: region.name }); setResults([]); }}>
            <View style={{ flex: 1 }}><Text style={styles.rowTitle}>{region.name}</Text><Text style={styles.muted}>{region.code}</Text></View>
            <Text style={region.code === regionCode ? styles.selected : styles.unselected}>{region.code === regionCode ? '●' : '○'}</Text>
          </Pressable>
        ))}
      </Card>

      <Card><View style={styles.row}><View style={{ flex: 1 }}><Text style={styles.rowTitle}>데이터 갱신 알림</Text><Text style={styles.muted}>관심 지역의 공식 통계가 새로 게시될 때 알림</Text></View><Switch value={notificationsEnabled} onValueChange={toggleNotifications} /></View></Card>
      <Card><Text style={styles.rowTitle}>데이터 범위</Text><Text style={styles.muted}>지역 선택은 전국을 지원합니다. 범죄통계는 해당 지역에 공식 경찰서 단위 공개자료가 연결된 경우에만 표시하고, 없는 지역은 임의 추정하지 않습니다.</Text></Card>
      <Card><Text style={styles.rowTitle}>개인정보 원칙</Text><Text style={styles.muted}>위치는 지역 판별에만 사용하고 이동경로를 만들지 않습니다. 서버에는 관심 행정구역과 푸시 토큰만 등록하도록 설계합니다.</Text></Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F7FA' }, content: { padding: 18, paddingTop: 62, paddingBottom: 40, gap: 14 }, back: { color: '#2563EB', fontWeight: '700', marginBottom: 6 }, sectionTitle: { fontSize: 18, fontWeight: '800', color: '#111827' }, current: { fontSize: 19, fontWeight: '800', color: '#111827' }, row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 9, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#E5E7EB' }, rowTitle: { fontSize: 15, fontWeight: '700', color: '#111827' }, muted: { fontSize: 12, lineHeight: 18, color: '#6B7280' }, selected: { color: '#2563EB', fontSize: 22 }, unselected: { color: '#9CA3AF', fontSize: 22 }, link: { color: '#2563EB', fontWeight: '700', marginVertical: 8 }, input: { minHeight: 46, borderWidth: 1, borderColor: '#D1D5DB', borderRadius: 12, paddingHorizontal: 14, fontSize: 15, backgroundColor: '#FFF' }, searchButton: { minHeight: 44, backgroundColor: '#111827', borderRadius: 12, justifyContent: 'center', alignItems: 'center' }, searchButtonText: { color: '#FFF', fontWeight: '800' },
});
