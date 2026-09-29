import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import PrimaryButton from "../../components/PrimaryButton";

export default function ResetPasswordScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]">
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        className="flex-1"
      >
        <ScrollView contentContainerClassName="flex-grow px-6 pt-10 pb-6">
          <View className="items-center mb-10">
            <Text className="text-3xl font-bold text-[#151B2C] mb-2">Reset Password</Text>
            <Text className="text-base text-zinc-600">Enter your email and we'll send a reset link.</Text>
          </View>

          <View className="flex-1">
            <CustomInput
              label="Email"
              iconName="mail"
              placeholder="abc@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <PrimaryButton 
            title="Send Reset Link" 
            className="mt-auto" 
            onPress={() => router.push("/verify")}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
