import { TextInput, View, Text } from 'react-native';

interface InputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  className?: string;
  multiline?: boolean;
  numberOfLines?: number;
}

export function Input({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  className = '',
  multiline,
  numberOfLines,
}: InputProps) {
  return (
    <View className={`w-full mb-4 ${className}`}>
      {label && <Text className="text-slate-400 text-sm font-medium mb-1.5 ml-1">{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#64748b"
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={multiline ? { height: 120, textAlignVertical: 'top' } : undefined}
        className={`bg-slate-800/50 border border-slate-700 text-white rounded-xl px-4 ${
          multiline ? 'py-3' : 'py-3.5'
        }`}
      />
    </View>
  );
}
