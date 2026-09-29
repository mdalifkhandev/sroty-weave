import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ScreenHeader } from "../../components/ScreenHeader";

export default function PrivacyPolicyScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-10">
        
        <ScreenHeader 
          title="Privacy Policy" 
          showBack 
          onBack={() => router.back()} 
        />

        <View className="border-t border-[#151B2C]/10 mb-6" />

        <Text className="text-lg font-bold text-[#151B2C] mb-2">Information Collection</Text>
        <Text className="text-[#151B2C]/80 leading-6 mb-6">
          When you use StoryWeave, we collect basic profile information such as your name, email, and subscription status. We also track reading history to improve personalized recommendations.
        </Text>

        <Text className="text-lg font-bold text-[#151B2C] mb-2">How We Use Your Data</Text>
        <Text className="text-[#151B2C]/80 leading-6 mb-6">
          Your data is solely used to enhance the application experience. Reading progress and choices are saved locally and synced to our servers so you can pick up exactly where you left off across devices.
        </Text>

        <Text className="text-lg font-bold text-[#151B2C] mb-2">AI Interaction Logs</Text>
        <Text className="text-[#151B2C]/80 leading-6 mb-6">
          All custom prompts generated in the "Create Story" mode are sent to our secure AI partners (e.g., Claude) to generate the content. Personal identifiers are stripped before any prompt is processed.
        </Text>

        <Text className="text-lg font-bold text-[#151B2C] mb-2">Data Security</Text>
        <Text className="text-[#151B2C]/80 leading-6 mb-10">
          We use industry-standard encryption protocols (TLS) for data transmission. We do not sell your personal information to third parties under any circumstances.
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}
