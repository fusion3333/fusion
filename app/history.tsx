import { useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, ScreenTitle } from '@/components/ui';
import { fetchCrimeHistory } from '@/services/api';
import { useSettingsStore } from '@/store/settings';

const labels = { murder: '살인', robbery: '강도', sexual_violence: '성범죄', theft: '절도', violence: '폭력' } as const;

export default function HistoryScreen() {
  const regionCode = useSettingsStore((state) => state.regionCode);
  const query = useQuery({ queryKey: ['crime-history', regionCode], queryFn: () => fetchCrimeHistory(regionCode), staleTime: 30 * 60 * 1000 });
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <Text style={styles.back} onPress={() => router.back()}>← 돌아가기</Text>
    <ScreenTitle title="범죄 통계 추이" subtitle={query.data ? `${query.data.regionName} · ${query.data.policeStation}` : '공식 경찰서별 연도 통계'} />
    {query.isLoading ? <Card><Text>불러오는 중…</Text></Card> : null}
    {query.isError ? <Card><Text style={styles.error}>{query.error instanceof Error ? query.error.message : '데이터 오류'}</Text></Card> : null}
    {query.data?.history.map((block) => <Card key={block.period}>
      <View style={styles.yearRow}><Text style={styles.year}>{block.period}</Text>{block.status === 'provisional' ? <Text style={styles.badge}>잠정</Text> : null}</View>
      {block.rows.map((row) => <View key={row.category} style={styles.row}><Text style={styles.label}>{labels[row.category]}</Text><Text style={styles.value}>{row.incidents.toLocaleString()}건</Text>{row.arrests !== undefined ? <Text style={styles.muted}>검거 {row.arrests.toLocaleString()}건</Text> : null}</View>)}
    </Card>)}
  </ScrollView>;
}

const styles = StyleSheet.create({ screen: { flex: 1, backgroundColor: '#F5F7FA' }, content: { padding: 18, paddingTop: 62, paddingBottom: 40, gap: 14 }, back: { color: '#2563EB', fontWeight: '700' }, error: { color: '#991B1B' }, yearRow: { flexDirection: 'row', gap: 8, alignItems: 'center' }, year: { fontSize: 20, fontWeight: '800', color: '#111827' }, badge: { fontSize: 11, color: '#92400E', backgroundColor: '#FEF3C7', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 }, row: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 5 }, label: { width: 64, fontWeight: '700', color: '#374151' }, value: { width: 78, fontWeight: '800', color: '#111827' }, muted: { color: '#6B7280', fontSize: 12 } });
