import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDailyStore } from '../../src/store/useDailyStore';
import { DailyEntry } from '../../src/types';

export default function HistoryScreen() {
  const { entries } = useDailyStore();

  const renderItem = ({ item }: { item: DailyEntry }) => (
    <TouchableOpacity 
      activeOpacity={0.7}
      className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 mb-4"
    >
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-blue-400 font-bold">{item.date}</Text>
        {item.commits.length > 0 && (
          <View className="bg-blue-500/10 px-2 py-0.5 rounded">
            <Text className="text-blue-400 text-xs">{item.commits.length} commitów</Text>
          </View>
        )}
      </View>

      <View className="mb-2">
        <Text className="text-slate-500 text-xs font-bold uppercase mb-1">Wczoraj</Text>
        <Text className="text-white text-sm" numberOfLines={2}>{item.yesterday}</Text>
      </View>

      <View>
        <Text className="text-slate-500 text-xs font-bold uppercase mb-1">Dziś</Text>
        <Text className="text-white text-sm" numberOfLines={2}>{item.today}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-[#0f172a] p-5">
      <Text className="text-3xl font-bold text-white mb-2 mt-4">Historia</Text>
      <Text className="text-slate-400 mb-8">Przeglądaj swoje poprzednie standupy.</Text>

      {entries.length > 0 ? (
        <FlatList
          data={entries}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View className="flex-1 items-center justify-center opacity-50">
          <Text className="text-white text-lg">Brak wpisów w historii</Text>
          <Text className="text-slate-400 text-sm text-center mt-2">
            Zapisz swój pierwszy standup, aby pojawił się tutaj.
          </Text>
        </View>
      )}
    </View>
  );
}

