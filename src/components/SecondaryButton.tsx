import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface SecondaryButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function SecondaryButton({ title, className, ...props }: SecondaryButtonProps) {
  return (
    <TouchableOpacity
      className={`border border-[#151B2C] py-4 rounded-full flex-row justify-center items-center ${className || ""}`}
      {...props}
    >
      <Text className="text-[#151B2C] text-lg font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}
