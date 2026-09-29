import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { CustomButton } from "../../components/CustomButton";

export default function AdInterstitialScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top', 'bottom']}>
      <View className="flex-1 justify-center items-center px-8 pb-10">
        <View className="items-center mb-8 relative">
          <Text className="text-[100px] mb-4 leading-none">🗑️</Text>
          <View className="absolute -top-4 -right-4 bg-white rounded-full p-2 border border-[#151B2C]/10">
            <Text className="text-xs font-bold text-[#151B2C]">ADS ❌</Text>
          </View>
        </View>

        <Text className="text-3xl font-bold text-[#151B2C] text-center mb-4">
          Remove all ads
        </Text>
        <Text className="text-[#151B2C]/80 text-center text-base leading-6 px-4">
          Go Premium & read every story without interruption. Unlock all genres. Unlimited AI generation.
        </Text>
      </View>

      <View className="px-6 pb-8">
        <CustomButton 
          title="Upgrade to Premium" 
          showArrow 
          onPress={() => router.push("/profile/subscription" as any)} 
          className="mb-4"
        />
        <CustomButton 
          title="Continue with ads" 
          variant="secondary"
          onPress={() => router.back()} 
        />
      </View>
    </SafeAreaView>
  );
}
