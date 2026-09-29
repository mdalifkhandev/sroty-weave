import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { CustomButton } from "../../components/CustomButton";

export default function RestorePurchasesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top', 'bottom']}>
      <View className="flex-1 justify-center items-center px-8 pb-20">
        <View className="items-center mb-8">
          <Text className="text-6xl mb-4">🛍️</Text>
        </View>

        <Text className="text-3xl font-bold text-[#151B2C] text-center mb-4">
          Restore Purchases
        </Text>
        <Text className="text-[#151B2C]/80 text-center text-base leading-6">
          If you previously subscribed, sign in with the same account to restore your access.
        </Text>
      </View>

      <View className="px-6 pb-8">
        <CustomButton 
          title="Restore Now" 
          showArrow 
          onPress={() => router.back()} 
          className="mb-4"
        />
        <CustomButton 
          title="Back" 
          variant="secondary"
          onPress={() => router.back()} 
        />
      </View>
    </SafeAreaView>
  );
}
