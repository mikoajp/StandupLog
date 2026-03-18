import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function Button({ onPress, title, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = 'py-4 px-6 rounded-xl items-center justify-center';

  const variants = {
    primary: 'bg-blue-600',
    secondary: 'bg-slate-700',
    outline: 'border-2 border-blue-600 bg-transparent',
  };

  const textStyles = {
    primary: 'text-white font-semibold text-lg',
    secondary: 'text-white font-semibold text-lg',
    outline: 'text-blue-600 font-semibold text-lg',
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <Text className={textStyles[variant]}>{title}</Text>
    </TouchableOpacity>
  );
}
