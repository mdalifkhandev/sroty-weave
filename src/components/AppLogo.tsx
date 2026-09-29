import { Image, ImageStyle, StyleProp } from "react-native";

interface AppLogoProps {
  width?: number;
  height?: number;
  style?: StyleProp<ImageStyle>;
}

export function AppLogo({ width = 200, height = 200, style }: AppLogoProps) {
  return (
    <Image 
      source={require("../../assets/images/logo.png")} 
      style={[{ width, height, resizeMode: "contain" }, style]} 
    />
  );
}
