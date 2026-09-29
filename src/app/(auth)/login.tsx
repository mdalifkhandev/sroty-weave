import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import PrimaryButton from "../../components/PrimaryButton";
import SocialButton from "../../components/SocialButton";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]">
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"} 
        className="flex-1"
      >
        <ScrollView contentContainerClassName="flex-grow justify-center px-6 pt-10 pb-6">
          <View className="items-center mb-10">
            <Text className="text-3xl font-bold text-[#151B2C] mb-2">Welcome back</Text>
            <Text className="text-base text-zinc-600">Pick up where you left off.</Text>
          </View>

          <View className="space-y-5">
            <CustomInput
              label="Email"
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
          </View>

          <TouchableOpacity className="mt-4 mb-8 self-end">
            <Link href="/reset-password" asChild>
              <Text className="text-[#151B2C] text-sm">Forgot Password?</Text>
            </Link>
          </TouchableOpacity>

          <PrimaryButton 
            title="Login" 
            onPress={() => router.replace("/adult-content")}
          />

          <View className="flex-row items-center my-8">
            <View className="flex-1 h-[1px] bg-zinc-300" />
            <Text className="mx-4 text-zinc-600 text-sm">OR</Text>
            <View className="flex-1 h-[1px] bg-zinc-300" />
          </View>

          <View className="space-y-4">
            <SocialButton title="Login with Google" provider="google" />
            <SocialButton title="Login with Facebook" provider="facebook" />
          </View>

          <View className="flex-row justify-center mt-8">
            <Text className="text-[#151B2C] text-base">Don't have an account? </Text>
            <Link href="/signup" asChild>
              <TouchableOpacity>
                <Text className="text-[#ED6442] text-base font-medium">Sign up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
