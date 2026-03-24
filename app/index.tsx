import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../src/components/Button';

export default function Home() {
  return (
    <View className="flex-1 bg-[#0f172a] items-center justify-center p-5">
      <Text className="text-4xl font-bold text-white mb-2">DevLog 🚀</Text>
      <Text className="text-base text-slate-400 mb-6 text-center">
        AI Standup & Progress Tracker
      </Text>

      <View className="bg-green-900/30 px-3 py-1.5 rounded-lg mb-8">
        <Text className="text-sm text-green-500 font-medium">Faza 2: Core MVP ✅</Text>
      </View>

      <View className="w-full max-w-sm space-y-4">
        <Link href="/(tabs)" asChild>
          <Button title="Zacznij Standup" onPress={() => {}} />
        </Link>
      </View>

      <StatusBar style="light" />
    </View>
  );
}
