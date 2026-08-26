import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Card, Metric, ScreenTitle } from '@/components/ui';
import { getSelectedRegion, useSettingsStore } from '@/store/settings';
import { useSafetySnapshot } from '@/hooks/useSafetySnapshot';

const labels = {
  murder: '살인',
  robbery: '강도',
  sexual_violence: '성범죄',
  theft: '절도',
  violence: '폭력',
} as const;

export default function HomeScreen() {
  const regionCode = useSettingsStore((state) => state.regionCode);
  const region = getSelectedRegion(regionCode);
  const query = useSafetySnapshot(regionCode);
  const snapshot = query.data;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      refreshControl={<RefreshControl refreshing={query.isRefetching} onRefresh={() => query.refetch()} />}
    >
      <View style={styles.headerRow}>
        <ScreenTitle title="우리동네 안전알림" subtitle="공식 공개데이터로 확인하는 지역 안전정보" />
        <Ionicons name="settings-outline" size={25} color="#111827" onPress={() => router.push('/settings')} />
      </View>

      <Card>
        <View style={styles.locationRow}>
          <Ionicons name="location" size={20} color="#111827" />
          <View style={{ flex: 1 }}>
            <Text style={styles.region}>{region.name}</Text>
            <Text style={styles.muted}>{region.policeStation ?? '관할 경찰서 매핑 준비 중'}</Text>
          </View>
          <Text style={styles.link} onPress={() => router.push('/settings')}>변경</Text>
        </View>
      </Card>

      {query.isLoading ? <Card><Text>공식 데이터를 불러오는 중입니다…</Text></Card> : null}

      {query.isError ? (
        <Card>
          <Text style={styles.errorTitle}>데이터 연결이 필요합니다</Text>
          <Text style={styles.muted}>{query.error instanceof Error ? query.error.message : '알 수 없는 오류'}</Text>
          <Text style={styles.notice}>API 키가 없거나 서버가 실행되지 않은 경우 임의 수치를 표시하지 않습니다.</Text>
        </Card>
      ) : null}

      {snapshot ? (
        <>
          <Card>
            <Text style={styles.sectionTitle}>5대 범죄 공개통계</Text>
            <Text style={styles.muted}>기준 {snapshot.period}</Text>
            <View style={styles.metricGrid}>
              {snapshot.crimes.map((crime) => (
                <Metric key={crime.category} label={labels[crime.category]} value={`${crime.incidents.toLocaleString()}건`} detail={crime.policeStation} />
              ))}
            </View>
            <Text style={styles.notice}>통계는 개별 사건의 실시간 발생 알림이 아니라 공식 공개자료입니다.</Text>
          </Card>

          <Card>
            <Text style={styles.sectionTitle}>지역 인구 구성</Text>
            {snapshot.population ? (
              <View style={styles.metricGrid}>
                <Metric label="총 주민" value={snapshot.population.totalPopulation.toLocaleString()} />
                <Metric label="외국인 주민" value={snapshot.population.foreignResidents.toLocaleString()} />
                <Metric label="외국인 주민 비율" value={`${snapshot.population.foreignResidentRatio.toFixed(1)}%`} />
              </View>
            ) : <Text style={styles.muted}>해당 기간의 인구 통계가 없습니다.</Text>}
            <Text style={styles.notice}>외국인 주민 비율은 인구 구성 정보이며 범죄 위험도 산정에 사용하지 않습니다.</Text>
          </Card>

          <Card>
            <Text style={styles.sectionTitle}>데이터 투명성</Text>
            <Text style={styles.muted}>생성: {new Date(snapshot.generatedAt).toLocaleString('ko-KR')}</Text>
            <Text style={styles.link} onPress={() => router.push('/sources')}>출처와 한계 자세히 보기 →</Text>
          </Card>
        </>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F7FA' },
  content: { paddingHorizontal: 18, paddingTop: 64, paddingBottom: 40, gap: 14 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  region: { fontSize: 17, fontWeight: '800', color: '#111827' },
  muted: { fontSize: 13, lineHeight: 19, color: '#6B7280' },
  link: { fontSize: 14, fontWeight: '700', color: '#2563EB' },
  errorTitle: { fontSize: 17, fontWeight: '800', color: '#991B1B' },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#111827' },
  metricGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 18 },
  notice: { fontSize: 12, lineHeight: 18, color: '#4B5563', backgroundColor: '#F3F4F6', borderRadius: 12, padding: 12 },
});
