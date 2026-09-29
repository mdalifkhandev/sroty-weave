import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ScreenHeader } from "../../components/ScreenHeader";

export default function TermsOfServiceScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-10">
        
        <ScreenHeader 
          title="Terms of Service" 
          showBack 
          onBack={() => router.back()} 
        />

        <View className="border-t border-[#151B2C]/10 mb-6" />

        <Text className="text-lg font-bold text-[#151B2C] mb-2">User Accounts</Text>
        <Text className="text-[#151B2C]/80 leading-6 mb-6">
          You are responsible for maintaining the confidentiality of your account credentials. Any activity occurring under your account is your sole responsibility. StoryWeave reserves the right to terminate accounts that violate our guidelines.
        </Text>

        <Text className="text-lg font-bold text-[#151B2C] mb-2">Intellectual Property of Generated Stories</Text>
        <Text className="text-[#151B2C]/80 leading-6 mb-6">
          While users input prompts to generate custom narratives, StoryWeave retains the non-exclusive right to store and display these generated stories within the app. Users may not resell AI-generated content produced on our platform without explicit permission.
        </Text>

        <Text className="text-lg font-bold text-[#151B2C] mb-2">Acceptable Use Policy</Text>
        <Text className="text-[#151B2C]/80 leading-6 mb-6">
          You agree not to use StoryWeave to generate hateful, explicit, or otherwise harmful content. Our AI models are equipped with safety filters; circumventing these filters will result in an immediate ban.
        </Text>

        <Text className="text-lg font-bold text-[#151B2C] mb-2">Subscription Billing Rules</Text>
        <Text className="text-[#151B2C]/80 leading-6 mb-10">
          Premium subscriptions are billed annually or monthly. Cancellations take effect at the end of the current billing cycle. No partial refunds are provided for mid-cycle cancellations.
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}
