import { View, Text } from 'react-native';

export default function HistoryScreen() {
  return (
    <View className="flex-1 bg-[#0f172a] items-center justify-center p-5">
      <Text className="text-2xl font-bold text-white mb-2">Historia</Text>
      <Text className="text-slate-400 text-center">Przeglądaj swoje poprzednie wpisy.</Text>
    </View>
  );
}
