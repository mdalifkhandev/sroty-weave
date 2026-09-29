import { useRouter } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

export default function AdultContentScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]">
      <View className="flex-1 px-6 pt-20 pb-6 items-center justify-between">

        <View className="items-center justify-center flex-1 w-full mt-10">
          <Text className="text-[120px] mb-12">🐻</Text>

          <Text className="text-[28px] font-bold text-[#151B2C] mb-4 text-center tracking-tight">Adult content</Text>
          <Text className="text-[15px] text-[#151B2C]/80 text-center leading-6 px-2">
            Stories For Adults contains mature themes, moral complexity, and consequences. Are you 18 or older?
          </Text>
        </View>

        <View className="w-full space-y-4">
          <View className="flex-row justify-center items-center mb-8">
            <View className="w-8 h-1.5 bg-[#ED6442] rounded-full mx-1" />
            <View className="w-2 h-2 bg-[#ED6442]/30 rounded-full mx-1" />
            <View className="w-2 h-2 bg-[#ED6442]/30 rounded-full mx-1" />
            <View className="w-2 h-2 bg-[#ED6442]/30 rounded-full mx-1" />
          </View>

          <PrimaryButton
            title="Yes, I'm 18 or older"
            onPress={() => router.push("/mystery-mode")}
          />
          <SecondaryButton
            title="No, take me back"
            className="mt-3"
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              } else {
                router.replace("/login");
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
