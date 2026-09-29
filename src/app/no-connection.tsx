import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { CustomButton } from "../components/CustomButton";

export default function NoConnectionScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top', 'bottom']}>
      <View className="flex-1 justify-center items-center px-8 pb-10">
        <View className="items-center mb-8 bg-white p-4 rounded-3xl border border-[#151B2C]/10 shadow-sm">
          <Text className="text-5xl">📡</Text>
        </View>

        <Text className="text-3xl font-bold text-[#151B2C] text-center mb-4">
          No connection
        </Text>
        <Text className="text-[#151B2C]/80 text-center text-base leading-6 px-4">
          You'll need a connection to access stories. If you're Premium, your in-progress stories are available offline.
        </Text>
      </View>

      <View className="px-6 pb-8">
        <CustomButton 
          title="Try Again" 
          showArrow 
          onPress={() => {}} 
          className="mb-4"
        />
        <CustomButton 
          title="View offline Services" 
          variant="secondary"
          onPress={() => router.push("/profile/history" as any)} 
        />
      </View>
    </SafeAreaView>
  );
}
