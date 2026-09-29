import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ScreenHeader } from "../../components/ScreenHeader";
import { CustomButton } from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

export default function AccountScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-32">
        
        <ScreenHeader 
          title="Account" 
          showBack 
          onBack={() => router.back()} 
        />

        <View className="border-t border-[#151B2C]/10 mb-6" />

        <View className="mb-6">
          <CustomInput 
            label="Email"
            iconName="mail"
            value="abc@email.com"
            editable={false}
          />
        </View>

        <View className="mb-6">
          <CustomInput 
            label="New Password"
            iconName="lock"
            value="*************"
            isPassword={true}
            editable={false}
          />
        </View>

        <View className="mb-6">
          <CustomInput 
            label="Confirm New Password"
            iconName="lock"
            value="*************"
            isPassword={true}
            editable={false}
          />
        </View>

      </ScrollView>

      {/* Action Buttons */}
      <View className="absolute bottom-0 left-0 right-0 p-6 bg-[#FDF3E1]">
        <CustomButton title="Save Changes" showArrow className="mb-4" />
        <CustomButton title="Delete Account" variant="destructive" />
        <Text className="text-[#151B2C]/70 text-xs text-center mt-3">
          Deleting your account is permanent and cannot be undone
        </Text>
      </View>
    </SafeAreaView>
  );
}
