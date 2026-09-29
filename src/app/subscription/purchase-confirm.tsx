import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import { CustomButton } from "../../components/CustomButton";

export default function PurchaseConfirmScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top', 'bottom']}>
      <View className="flex-1 justify-center items-center px-8 pb-20">
        <View className="items-center mb-8">
          <Text className="text-6xl mb-4">👑</Text>
        </View>

        <Text className="text-3xl font-bold text-[#151B2C] text-center mb-4">
          Welcome to premium
        </Text>
        <Text className="text-[#151B2C]/80 text-center text-base leading-6">
          Every story is now unlocked. No ads. Unlimited generation. Your library just got a lot bigger.
        </Text>
      </View>

      <View className="px-6 pb-8">
        <CustomButton 
          title="Start Reading" 
          showArrow 
          onPress={() => router.push("/(tabs)/" as any)} 
        />
      </View>
    </SafeAreaView>
  );
}
