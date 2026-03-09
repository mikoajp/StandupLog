import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DevLog 🚀</Text>
      <Text style={styles.subtitle}>AI Standup & Progress Tracker</Text>
      <Text style={styles.phase}>Faza 0: Setup Complete ✅</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 24,
  },
  phase: {
    fontSize: 14,
    color: '#22c55e',
    backgroundColor: '#14532d',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
});
