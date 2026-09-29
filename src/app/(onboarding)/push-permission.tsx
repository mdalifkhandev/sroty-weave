import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { CustomButton } from "../../components/CustomButton";

export default function PushPermissionScreen() {
  const router = useRouter();

  const handleNext = () => {
    router.replace("/(tabs)/profile" as any);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top', 'bottom']}>
      <View className="flex-1 justify-center items-center px-8 pb-10">
        <View className="items-center mb-8 bg-white p-4 rounded-3xl border border-[#151B2C]/10 shadow-sm">
          <Text className="text-5xl">🔔</Text>
        </View>

        <Text className="text-3xl font-bold text-[#151B2C] text-center mb-4">
          Stay in the story
        </Text>
        <Text className="text-[#151B2C]/80 text-center text-base leading-6 mb-10 px-2">
          We'll let you know when new stories are added to your section — and remind you when you've left a story unfinished.
        </Text>

        <View className="w-full">
          <View className="border border-[#151B2C] bg-[#FDF3E1] rounded-2xl p-4 mb-3 flex-row items-center">
            <Text className="text-xl mr-3">📚</Text>
            <Text className="font-semibold text-[#151B2C] text-base">New stories added weekly</Text>
          </View>

          <View className="border border-[#151B2C] bg-[#FDF3E1] rounded-2xl p-4 mb-3 flex-row items-center">
            <Text className="text-xl mr-3">🎗️</Text>
            <Text className="font-semibold text-[#151B2C] text-base">Continue where you left off</Text>
          </View>
        </View>
      </View>

      <View className="px-6 pb-8">
        <CustomButton 
          title="Allow Notifications" 
          showArrow 
          onPress={handleNext} 
          className="mb-4"
        />
        <CustomButton 
          title="Not now" 
          variant="secondary"
          onPress={handleNext} 
        />
      </View>
    </SafeAreaView>
  );
}
