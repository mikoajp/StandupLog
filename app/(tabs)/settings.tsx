import { View, Text, ScrollView, Alert } from 'react-native';
import { useUserStore } from '../../src/store/useUserStore';
import { Input, Button } from '../../src/components';
import { useState } from 'react';

export default function SettingsScreen() {
  const { profile, updateProfile } = useUserStore();
  
  const [githubUsername, setGithubUsername] = useState(profile?.githubUsername || '');
  const [githubToken, setGithubToken] = useState(profile?.githubToken || '');
  const [geminiApiKey, setGeminiApiKey] = useState(profile?.geminiApiKey || '');

  const handleSave = () => {
    updateProfile({
      githubUsername,
      githubToken,
      geminiApiKey,
    });
    Alert.alert('Sukces', 'Ustawienia zostały zapisane!');
  };

  return (
    <ScrollView className="flex-1 bg-[#0f172a]" contentContainerStyle={{ padding: 20 }}>
      <Text className="text-3xl font-bold text-white mb-2 mt-4">Ustawienia</Text>
      <Text className="text-slate-400 mb-8">
        Skonfiguruj połączenie z GitHub i Gemini AI, aby zautomatyzować swoje standupy.
      </Text>

      <View className="space-y-6">
        <View>
          <Text className="text-white font-semibold text-lg mb-4">GitHub API</Text>
          <Input
            label="GitHub Username"
            value={githubUsername}
            onChangeText={setGithubUsername}
            placeholder="np. johndoe"
          />
          <Input
            label="Personal Access Token"
            value={githubToken}
            onChangeText={setGithubToken}
            placeholder="ghp_xxxxxxxxxxxx"
            secureTextEntry
          />
          <Text className="text-slate-500 text-xs px-1 -mt-2 mb-4">
            Wymagany scope: 'repo' oraz 'read:user'.
          </Text>
        </View>

        <View className="pt-4">
          <Text className="text-white font-semibold text-lg mb-4">Gemini AI</Text>
          <Input
            label="Gemini API Key"
            value={geminiApiKey}
            onChangeText={setGeminiApiKey}
            placeholder="AIzaSyxxxxxxxxxxxx"
            secureTextEntry
          />
        </View>

        <Button 
          title="Zapisz ustawienia" 
          onPress={handleSave}
          className="mt-4"
        />
      </View>
    </ScrollView>
  );
}
