import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function KidsHomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]">
      <ScrollView contentContainerClassName="px-6 pt-6 pb-10">
        
        <View className="flex-row items-center mb-10">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center mr-4"
          >
            <Feather name="arrow-left" size={24} color="#151B2C" />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-2xl font-bold text-[#151B2C] text-center mr-16">What kind of Story</Text>
            <Text className="text-sm text-[#151B2C]/70 text-center mr-16 mt-1">Each mode plays completely differently!</Text>
          </View>
        </View>

        <TouchableOpacity 
          className="border border-[#151B2C] rounded-3xl p-5 mb-4 bg-[#FDF3E1]"
          onPress={() => router.push("/kids-mystery-library")}
        >
          <View className="flex-row justify-between items-start mb-2">
            <Text className="text-xl font-bold text-[#151B2C]">Solve a Mystery</Text>
            <Text className="text-2xl">🌅</Text>
          </View>
          <Text className="text-[#151B2C]/80 leading-5 mb-4 pr-8">
            One correct path. Find the clues in order or end up somewhere worse
          </Text>
          <View className="flex-row items-center bg-zinc-200/50 self-start rounded-full px-4 py-2">
            <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
            <Text className="text-[#151B2C] text-sm">One correct path</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="border border-[#151B2C] rounded-3xl p-5 mb-4 bg-[#FDF3E1]">
          <View className="flex-row justify-between items-start mb-2">
            <Text className="text-xl font-bold text-[#151B2C]">Quest Mode</Text>
            <Text className="text-2xl">🌅</Text>
          </View>
          <Text className="text-[#151B2C]/80 leading-5 mb-4 pr-8">
            One best ending. The others lead to losing something important.
          </Text>
          <View className="flex-row items-center bg-zinc-200/50 self-start rounded-full px-4 py-2">
            <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
            <Text className="text-[#151B2C] text-sm">Wrong paths cost you</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
