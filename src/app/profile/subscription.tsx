import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function SubscriptionScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-32">
        
        {/* Header */}
        <View className="flex-row items-center mb-8 relative justify-center">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="absolute left-0 w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center"
          >
            <ArrowLeft size={24} color="#151B2C" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#151B2C]">Subscription</Text>
        </View>

        {/* Current Plan Card */}
        <View className="border border-[#ED6442] rounded-3xl p-5 mb-8 bg-[#FDF3E1]">
          <View className="flex-row justify-between items-start mb-6">
            <View>
              <Text className="text-lg font-bold text-[#151B2C] mb-1">Premium Annual</Text>
              <Text className="text-[#151B2C]/70 text-sm">$34.99 / year</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5 border border-[#151B2C]/5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C] text-xs font-medium">Active</Text>
            </View>
          </View>

          <View className="border-t border-[#151B2C]/10 mb-4" />

          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-[#151B2C]/70 text-sm">Next renewal</Text>
            <Text className="text-[#151B2C] font-bold text-sm">Nov 14, 2026</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-[#151B2C]/70 text-sm">Billed through</Text>
            <Text className="text-[#151B2C] font-bold text-sm">App Store</Text>
          </View>
        </View>

      </ScrollView>

      {/* Action Buttons */}
      <View className="absolute bottom-0 left-0 right-0 p-6 bg-[#FDF3E1]">
        <TouchableOpacity className="bg-[#ED6442] py-4 rounded-full flex-row justify-center items-center mb-4">
          <Text className="text-white font-bold text-lg mr-2">Manage in App Store</Text>
          <ArrowRight size={20} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity className="border border-[#151B2C] py-4 rounded-full flex-row justify-center items-center mb-3">
          <Text className="text-[#151B2C] font-bold text-lg">Cancel Subscription</Text>
        </TouchableOpacity>
        
        <Text className="text-[#151B2C]/60 text-xs text-center">
          Cancellations take effect at the end of the current billing period.
        </Text>
      </View>
    </SafeAreaView>
  );
}
