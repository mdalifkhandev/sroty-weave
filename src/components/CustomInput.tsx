import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

interface CustomInputProps extends TextInputProps {
  label: string;
  iconName: keyof typeof Feather.glyphMap;
  isPassword?: boolean;
}

export default function CustomInput({ label, iconName, isPassword, ...props }: CustomInputProps) {
  const [isSecure, setIsSecure] = useState(isPassword);

  return (
    <View>
      <Text className="text-[#151B2C] font-medium mb-2 text-base">{label}</Text>
      <View className="flex-row items-center border border-zinc-400 rounded-xl px-4  bg-[#FDF3E1]">
        <Feather name={iconName} size={20} color="#52525B" />
        <TextInput
          className="flex-1 ml-3 text-base text-[#151B2C]"
          placeholderTextColor="#71717A"
          secureTextEntry={isSecure}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
            <Feather name={isSecure ? "eye-off" : "eye"} size={20} color="#A1A1AA" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
