import { View, Text } from 'react-native';

export default function DailyScreen() {
  return (
    <View className="flex-1 bg-[#0f172a] items-center justify-center p-5">
      <Text className="text-2xl font-bold text-white mb-2">Dzisiejszy Standup</Text>
      <Text className="text-slate-400 text-center">Tutaj pojawi się formularz Twojego daily.</Text>
    </View>
  );
}
