import { View, Text, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useDailyStore } from '../../src/store/useDailyStore';
import { useUserStore } from '../../src/store/useUserStore';
import { Input, Button } from '../../src/components';
import { fetchGitHubCommits } from '../../src/services/github';
import { GitHubCommit } from '../../src/types';

export default function DailyScreen() {
  const { profile } = useUserStore();
  const { addEntry } = useDailyStore();

  const [yesterday, setYesterday] = useState('');
  const [today, setToday] = useState('');
  const [blockers, setBlockers] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchedCommits, setFetchedCommits] = useState<GitHubCommit[]>([]);

  const handleFetchGitHub = async () => {
    if (!profile?.githubUsername || !profile?.githubToken) {
      Alert.alert('Błąd', 'Skonfiguruj GitHub w Ustawieniach!');
      return;
    }

    setLoading(true);
    try {
      const commits = await fetchGitHubCommits(profile.githubUsername, profile.githubToken);
      if (commits.length > 0) {
        const commitSummary = commits
          .map(c => `• ${c.repo}: ${c.message}`)
          .join('\n');
        
        setYesterday(prev => (prev ? `${prev}\n${commitSummary}` : commitSummary));
        setFetchedCommits(commits);
        Alert.alert('Sukces', `Zaciągnięto ${commits.length} commitów.`);
      } else {
        Alert.alert('Info', 'Nie znaleziono nowych commitów z ostatniej doby.');
      }
    } catch (error) {
      Alert.alert('Błąd', 'Wystąpił problem podczas pobierania commitów.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!yesterday || !today) {
      Alert.alert('Błąd', 'Uzupełnij przynajmniej pola "Wczoraj" i "Dziś".');
      return;
    }

    const newEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      yesterday,
      today,
      blockers,
      commits: fetchedCommits,
    };

    addEntry(newEntry);
    Alert.alert('Zapisano!', 'Twój standup został zapisany.');
    
    // Reset form
    setYesterday('');
    setToday('');
    setBlockers('');
    setFetchedCommits([]);
  };

  return (
    <ScrollView className="flex-1 bg-[#0f172a]" contentContainerStyle={{ padding: 20 }}>
      <Text className="text-3xl font-bold text-white mb-2 mt-4">Twój Daily Standup</Text>
      <Text className="text-slate-400 mb-8">
        Co udało się zrobić i jakie masz plany na dziś?
      </Text>

      <View className="mb-6">
        <Button 
          title={loading ? "Pobieranie..." : "Zaciągnij z GitHub 🐙"} 
          onPress={handleFetchGitHub}
          variant="secondary"
          className="mb-6"
        />

        <Input
          label="Wczoraj"
          value={yesterday}
          onChangeText={setYesterday}
          placeholder="Co zrobiłeś wczoraj? (lub zaciągnij z GitHub)"
          multiline
        />

        <Input
          label="Dziś"
          value={today}
          onChangeText={setToday}
          placeholder="Co planujesz na dzisiaj?"
          multiline
        />

        <Input
          label="Blokery"
          value={blockers}
          onChangeText={setBlockers}
          placeholder="Czy coś Cię blokuje?"
          multiline
        />

        <Button 
          title="Zapisz Standup" 
          onPress={handleSubmit}
          className="mt-4"
        />
      </View>
    </ScrollView>
  );
}
