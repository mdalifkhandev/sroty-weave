import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  showArrow?: boolean;
}

export default function PrimaryButton({ title, showArrow = true, className, ...props }: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      className={`bg-[#ED6442] py-4 rounded-full flex-row justify-center items-center ${className || ""}`}
      {...props}
    >
      <Text className={`text-white text-lg font-semibold ${showArrow ? 'mr-2' : ''}`}>{title}</Text>
      {showArrow && <Feather name="arrow-right" size={20} color="white" />}
    </TouchableOpacity>
  );
}
