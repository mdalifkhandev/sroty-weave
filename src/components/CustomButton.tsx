import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ArrowRight } from "lucide-react-native";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'destructive';
  showArrow?: boolean;
}

export function CustomButton({ 
  title, 
  variant = 'primary', 
  showArrow = false, 
  className,
  ...rest 
}: CustomButtonProps) {
  
  let containerClasses = "py-4 rounded-full flex-row justify-center items-center w-full ";
  let textClasses = "font-bold text-lg ";
  let arrowColor = "white";

  if (variant === 'primary') {
    containerClasses += "bg-[#ED6442] ";
    textClasses += "text-white ";
    arrowColor = "white";
  } else if (variant === 'secondary') {
    containerClasses += "bg-transparent border border-[#151B2C] ";
    textClasses += "text-[#151B2C] ";
    arrowColor = "#151B2C";
  } else if (variant === 'destructive') {
    containerClasses += "bg-transparent border border-[#E53E3E] ";
    textClasses += "text-[#E53E3E] ";
    arrowColor = "#E53E3E";
  }

  return (
    <TouchableOpacity 
      className={`${containerClasses} ${className || ""}`}
      activeOpacity={0.8}
      {...rest}
    >
      <Text className={`${textClasses} ${showArrow ? 'mr-2' : ''}`}>{title}</Text>
      {showArrow && <ArrowRight size={20} color={arrowColor} />}
    </TouchableOpacity>
  );
}
