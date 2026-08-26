import type { PropsWithChildren, ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function ScreenTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={styles.titleWrap}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

export function Card({ children }: PropsWithChildren) {
  return <View style={styles.card}>{children}</View>;
}

export function Metric({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
      {detail ? <Text style={styles.metricDetail}>{detail}</Text> : null}
    </View>
  );
}

export function ActionButton({ label, onPress, icon }: { label: string; onPress: () => void; icon?: ReactNode }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      {icon}
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  titleWrap: { gap: 5, marginBottom: 18 },
  title: { fontSize: 28, lineHeight: 34, fontWeight: '800', color: '#111827' },
  subtitle: { fontSize: 14, lineHeight: 20, color: '#6B7280' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 18, gap: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  metric: { flex: 1, minWidth: 120, gap: 4 },
  metricLabel: { fontSize: 13, color: '#6B7280' },
  metricValue: { fontSize: 24, fontWeight: '800', color: '#111827' },
  metricDetail: { fontSize: 12, color: '#6B7280' },
  button: { minHeight: 48, borderRadius: 14, backgroundColor: '#111827', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8, paddingHorizontal: 16 },
  buttonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
});
