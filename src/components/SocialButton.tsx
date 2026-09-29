import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface SocialButtonProps extends TouchableOpacityProps {
  title: string;
  provider: "google" | "facebook";
}

export default function SocialButton({ title, provider, ...props }: SocialButtonProps) {
  return (
    <TouchableOpacity
      className="flex-row justify-center items-center border border-zinc-400 py-3.5 rounded-xl mt-3"
      {...props}
    >
      <FontAwesome5 name={provider} size={20} color="#151B2C" />
      <Text className="ml-3 text-[#151B2C] font-medium text-base">{title}</Text>
    </TouchableOpacity>
  );
}
