import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import PrimaryButton from "../../components/PrimaryButton";
import SocialButton from "../../components/SocialButton";

export default function SignupScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]">
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        className="flex-1"
      >
        <ScrollView contentContainerClassName="flex-grow justify-center px-6 pt-10 pb-6">
          <View className="items-center mb-10">
            <Text className="text-3xl font-bold text-[#151B2C] mb-2">Create account</Text>
            <Text className="text-base text-zinc-600">Start your first story in under a minute.</Text>
          </View>

          <View className="space-y-4">
            <CustomInput
              label="Enter your Email"
              iconName="mail"
              placeholder="abc@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <CustomInput
              label="Password"
              iconName="lock"
              placeholder="***************"
              isPassword
            />
            <CustomInput
              label="Confirm Password"
              iconName="lock"
              placeholder="***************"
              isPassword
            />
          </View>

          <PrimaryButton 
            title="Create Account" 
            className="mt-8" 
            onPress={() => router.push("/verify")}
          />

          <View className="flex-row items-center my-6">
            <View className="flex-1 h-[1px] bg-zinc-300" />
            <Text className="mx-4 text-zinc-600 text-sm">OR</Text>
            <View className="flex-1 h-[1px] bg-zinc-300" />
          </View>

          <View className="space-y-4">
            <SocialButton title="Login with Google" provider="google" />
            <SocialButton title="Login with Facebook" provider="facebook" />
          </View>

          <View className="items-center mt-8">
            <View className="flex-row mb-2">
              <Text className="text-[#151B2C] text-base">Already have an account? </Text>
              <Link href="/login" asChild>
                <TouchableOpacity>
                  <Text className="text-[#ED6442] text-base font-bold">Log in</Text>
                </TouchableOpacity>
              </Link>
            </View>
            <Text className="text-zinc-500 text-xs">
              By continuing you agree to our <Text className="font-bold text-[#151B2C]">Terms</Text> and <Text className="font-bold text-[#151B2C]">Privacy Policy</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
