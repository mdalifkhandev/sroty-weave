import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useSubscription } from "../../context/SubscriptionContext";
import { ScreenHeader } from "../../components/ScreenHeader";
import { CustomButton } from "../../components/CustomButton";

export default function SubscriptionScreen() {
  const router = useRouter();
  const { isPremium, planType, renewalDate, subscribe, cancelSubscription, restorePurchases } = useSubscription();
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual');

  if (isPremium) {
    return (
      <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
        <ScrollView contentContainerClassName="px-6 pt-6 pb-32">
          <ScreenHeader title="Subscription" showBack onBack={() => router.back()} />
          <View className="border border-[#ED6442] rounded-3xl p-5 mb-8 bg-[#FDF3E1]">
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="text-lg font-bold text-[#151B2C] mb-1">
                  {planType === 'annual' ? 'Premium Annual' : 'Premium Monthly'}
                </Text>
                <Text className="text-[#151B2C]/70 text-sm">
                  {planType === 'annual' ? '$34.99 / year' : '$4.99 / month'}
                </Text>
              </View>
              <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5 border border-[#151B2C]/5">
                <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
                <Text className="text-[#151B2C] text-xs font-medium">Active</Text>
              </View>
            </View>
            <View className="border-t border-[#151B2C]/10 mb-4" />
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-[#151B2C]/70 text-sm">Next renewal</Text>
              <Text className="text-[#151B2C] font-bold text-sm">{renewalDate || "Pending"}</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-[#151B2C]/70 text-sm">Billed through</Text>
              <Text className="text-[#151B2C] font-bold text-sm">App Store</Text>
            </View>
          </View>
        </ScrollView>
        <View className="absolute bottom-0 left-0 right-0 p-6 bg-[#FDF3E1]">
          <CustomButton title="Manage in App Store" showArrow className="mb-4" />
          <CustomButton title="Cancel Subscription" variant="secondary" onPress={cancelSubscription} />
          <Text className="text-[#151B2C]/60 text-xs text-center mt-3">
            Cancellations take effect at the end of the current billing period.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // Go Premium UI
  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-40">
        <ScreenHeader 
          title="Go Premium" 
          subtitle="Unlock the full StoryWeave experience"
          showBack 
          onBack={() => router.back()} 
        />

        <View className="border border-[#151B2C] rounded-3xl p-5 mb-8 bg-[#FDF3E1]">
          <Text className="text-[#ED6442] font-bold text-xs tracking-wider mb-5 uppercase">What you get</Text>
          
          <View className="flex-row items-center mb-4">
            <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-4 border border-[#151B2C]/10">
               <Text>📚</Text>
            </View>
            <View className="flex-1">
              <Text className="font-bold text-[#151B2C] text-base mb-0.5">Full story library</Text>
              <Text className="text-[#151B2C]/70 text-sm">All genres unlocked, new stories weekly</Text>
            </View>
          </View>
          
          <View className="flex-row items-center mb-4">
            <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-4 border border-[#151B2C]/10">
               <Text>🚫</Text>
            </View>
            <View className="flex-1">
              <Text className="font-bold text-[#151B2C] text-base mb-0.5">No ads, ever</Text>
              <Text className="text-[#151B2C]/70 text-sm">Read without interruption</Text>
            </View>
          </View>

          <View className="flex-row items-center mb-4">
            <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-4 border border-[#151B2C]/10">
               <Text>✨</Text>
            </View>
            <View className="flex-1">
              <Text className="font-bold text-[#151B2C] text-base mb-0.5">Unlimited AI generation</Text>
              <Text className="text-[#151B2C]/70 text-sm">Generate stories in any genre, any time</Text>
            </View>
          </View>
          
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-white rounded-full items-center justify-center mr-4 border border-[#151B2C]/10">
               <Text>☁️</Text>
            </View>
            <View className="flex-1">
              <Text className="font-bold text-[#151B2C] text-base mb-0.5">Sync across devices</Text>
              <Text className="text-[#151B2C]/70 text-sm">Your progress follows you everywhere</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => setSelectedPlan('annual')}
          className={`rounded-3xl p-5 mb-4 flex-row justify-between items-center ${selectedPlan === 'annual' ? 'bg-[#ED6442]' : 'bg-[#FDF3E1] border border-[#151B2C]'}`}
        >
          <View>
            <Text className={`font-bold text-lg mb-1 ${selectedPlan === 'annual' ? 'text-white' : 'text-[#151B2C]'}`}>Annual</Text>
            <Text className={`${selectedPlan === 'annual' ? 'text-white/80' : 'text-[#151B2C]/70'} text-sm`}>$2.92 / month</Text>
          </View>
          <View className="items-end">
            <Text className={`font-bold text-lg mb-1 ${selectedPlan === 'annual' ? 'text-white' : 'text-[#151B2C]'}`}>$34.99</Text>
            <Text className={`${selectedPlan === 'annual' ? 'text-white/80' : 'text-[#151B2C]/70'} text-sm`}>per year</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => setSelectedPlan('monthly')}
          className={`rounded-3xl p-5 mb-6 flex-row justify-between items-center ${selectedPlan === 'monthly' ? 'bg-[#ED6442]' : 'bg-[#FDF3E1] border border-[#151B2C]'}`}
        >
          <View>
            <Text className={`font-bold text-lg mb-1 ${selectedPlan === 'monthly' ? 'text-white' : 'text-[#151B2C]'}`}>Monthly</Text>
            <Text className={`${selectedPlan === 'monthly' ? 'text-white/80' : 'text-[#151B2C]/70'} text-sm`}>Flexible, cancel anytime</Text>
          </View>
          <View className="items-end">
            <Text className={`font-bold text-lg mb-1 ${selectedPlan === 'monthly' ? 'text-white' : 'text-[#151B2C]'}`}>$4.99</Text>
            <Text className={`${selectedPlan === 'monthly' ? 'text-white/80' : 'text-[#151B2C]/70'} text-sm`}>per month</Text>
          </View>
        </TouchableOpacity>

        <Text className="text-center text-[#151B2C]/70 text-xs mb-8 px-4 leading-5">
          Cancel anytime. Billed through App Store. Subscription renews automatically.
        </Text>
        
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-[#FDF3E1]/90">
        <CustomButton 
          title={`Start Premium - ${selectedPlan === 'annual' ? 'Annual' : 'Monthly'}`} 
          showArrow 
          onPress={() => subscribe(selectedPlan)} 
          className="mb-6"
        />
        <View className="items-center relative pb-2">
           <TouchableOpacity onPress={restorePurchases}>
             <Text className="font-bold text-[#151B2C] underline decoration-[#151B2C]/30 text-base">Restore Purchases</Text>
           </TouchableOpacity>
           {selectedPlan === 'annual' && (
             <View className="absolute top-0 -right-6 translate-x-full bg-[#ED6442] rounded-full px-2 py-0.5">
               <Text className="text-white text-[10px] font-bold">Best Value</Text>
             </View>
           )}
        </View>
      </View>
    </SafeAreaView>
  );
}
