import { Text, TouchableOpacity, View } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { ReactNode } from "react";

interface ProfileMenuItemProps {
  label: string;
  onPress: () => void;
  rightElement?: ReactNode;
  subtitle?: string;
}

export function ProfileMenuItem({ label, onPress, rightElement, subtitle }: ProfileMenuItemProps) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.7}
      className="border border-[#151B2C] bg-[#FDF3E1] rounded-2xl px-5 py-4 flex-row items-center justify-between mb-3.5"
    >
      <View className="flex-1 mr-4">
        <Text className="text-base font-semibold text-[#151B2C]">{label}</Text>
        {subtitle && <Text className="text-[#151B2C]/70 text-sm mt-0.5">{subtitle}</Text>}
      </View>
      <View>
        {rightElement ? rightElement : <ChevronRight size={20} color="#151B2C" />}
      </View>
    </TouchableOpacity>
  );
}
