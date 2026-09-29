import { Text, View } from "react-native";
import { CustomSwitch } from "./CustomSwitch";

interface ToggleItemProps {
  title: string;
  subtitle: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
}

export function ToggleItem({ title, subtitle, value, onValueChange }: ToggleItemProps) {
  return (
    <View className="border border-[#151B2C] rounded-2xl px-5 py-4 mb-3.5 bg-[#FDF3E1] flex-row justify-between items-center">
      <View className="flex-1 mr-4">
        <Text className="text-[#151B2C] font-semibold text-base">{title}</Text>
        <Text className="text-[#151B2C]/70 text-xs mt-1">{subtitle}</Text>
      </View>
      <CustomSwitch
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
}
