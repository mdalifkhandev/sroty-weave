import { View, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export function ScreenHeader({ title, subtitle, showBack = false, onBack }: ScreenHeaderProps) {
  return (
    <View className="flex-row items-center mb-8 relative justify-center min-h-[48px]">
      {showBack && onBack && (
        <TouchableOpacity 
          onPress={onBack}
          className="absolute left-0 w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center z-10"
        >
          <ArrowLeft size={24} color="#151B2C" />
        </TouchableOpacity>
      )}
      <View className="items-center px-14">
        <Text className="text-2xl font-bold text-[#151B2C] text-center">{title}</Text>
        {subtitle && (
          <Text className="text-[#151B2C]/70 text-sm mt-1 text-center">{subtitle}</Text>
        )}
      </View>
    </View>
  );
}
