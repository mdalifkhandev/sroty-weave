import { View, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef } from "react";
import { useRouter } from "expo-router";
import { AppLogo } from "../components/AppLogo";

export default function SplashScreen() {
  const router = useRouter();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate progress bar over 2.5 seconds
    Animated.timing(progress, {
      toValue: 1,
      duration: 2500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();

    // Auto-advance after 3 seconds
    const timer = setTimeout(() => {
      router.replace("/(onboarding)/push-permission" as any);
    }, 3000);

    return () => clearTimeout(timer);
  }, [progress, router]);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"]
  });

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1] justify-center items-center">
      <AppLogo width={250} height={250} />
      
      <View className="mt-10 w-48 h-1.5 bg-[#ED6442]/20 rounded-full overflow-hidden">
        <Animated.View 
          className="h-full bg-[#ED6442] rounded-full"
          style={{ width: widthInterpolated }}
        />
      </View>
    </SafeAreaView>
  );
}
