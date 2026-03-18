import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-[#0f172a] items-center justify-center p-5">
      <Text className="text-2xl font-bold text-white mb-2">Ustawienia</Text>
      <Text className="text-slate-400 text-center">Konfiguracja GitHub API & Gemini.</Text>
    </View>
  );
}
