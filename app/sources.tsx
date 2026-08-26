import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Card, ScreenTitle } from '@/components/ui';

export default function SourcesScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.back} onPress={() => router.back()}>← 돌아가기</Text>
      <ScreenTitle title="데이터 출처와 한계" subtitle="숫자보다 출처와 기준시점을 먼저 확인합니다." />
      <Card>
        <Text style={styles.title}>경찰 범죄통계</Text>
        <Text style={styles.body}>경찰청 및 시도경찰청이 공개하는 5대 범죄 발생·검거 통계를 사용합니다. 경찰서 관할 통계는 행정구역 경계와 정확히 일치하지 않을 수 있습니다.</Text>
      </Card>
      <Card>
        <Text style={styles.title}>외국인 주민 현황</Text>
        <Text style={styles.body}>행정안전부의 지방자치단체 외국인주민 현황 등 공식 통계를 사용합니다. 범죄통계와 독립적으로 표시합니다.</Text>
      </Card>
      <Card>
        <Text style={styles.title}>실시간성</Text>
        <Text style={styles.body}>현재 공개자료만으로 개별 범죄 사건의 발생 시각과 정확한 위치를 실시간 제공한다고 보장할 수 없습니다. 이 앱은 통계 공개 주기보다 빠른 정보처럼 표현하지 않습니다.</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F7FA' },
  content: { padding: 18, paddingTop: 62, paddingBottom: 40, gap: 14 },
  back: { color: '#2563EB', fontWeight: '700', marginBottom: 6 },
  title: { fontSize: 17, fontWeight: '800', color: '#111827' },
  body: { fontSize: 14, lineHeight: 21, color: '#4B5563' },
});
