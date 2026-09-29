import { Feather } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

export default function VerifyEmailScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]">
      <View className="flex-1 px-6 pt-20 pb-6 items-center">

        <View className="relative mb-10">
          <View className="bg-[#151B2C] p-8 rounded-2xl border-4 border-zinc-200">
            <Feather name="mail" size={64} color="#FDF3E1" />
          </View>
          <View className="absolute -top-3 -right-3 bg-[#ED6442] rounded-full p-2 border-2 border-white">
            <Feather name="check" size={24} color="white" />
          </View>
        </View>

        <Text className="text-3xl font-bold text-[#151B2C] mb-4 text-center">Check your email</Text>

        <Text className="text-base text-[#151B2C] text-center leading-6 mb-1">
          We sent a verification link to
        </Text>
        <Text className="text-base font-bold text-[#151B2C] text-center mb-1">
          you@example.com
        </Text>
        <Text className="text-base text-[#151B2C] text-center">
          Click the link to active your account.
        </Text>

        <View className="mt-auto w-full space-y-4">
          <PrimaryButton
            title="I've verified my email"
            onPress={() => router.replace("/gate")}
          />

          <TouchableOpacity className="border border-[#151B2C] py-4 mt-3 rounded-full flex-row justify-center items-center">
            <Text className="text-[#151B2C] text-lg font-semibold">Resend email</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-4">
            <Text className="text-[#151B2C] text-sm">Wrong email? </Text>
            <Link href="/signup" asChild>
              <TouchableOpacity>
                <Text className="text-[#ED6442] text-sm font-medium">Change it</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}
