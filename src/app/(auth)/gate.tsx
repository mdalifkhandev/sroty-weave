import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GateScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]">
      <ScrollView contentContainerClassName="px-6 pt-10 pb-6">
        <Text className="text-3xl font-bold text-[#151B2C] mb-8 text-center">Gate</Text>

        <View className="border border-zinc-400 rounded-3xl p-5 mb-6 bg-[#FDF3E1]">
          <View className="flex-row justify-between items-start mb-4">
            <Text className="text-2xl font-bold text-[#151B2C]">Stories for Adults</Text>
            <Text className="text-3xl">🌅</Text>
          </View>

          <View className="flex-row flex-wrap mb-8">
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-4 py-2 mr-3 mb-3">
              <View className="w-2 h-2 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C]">Thriller</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-4 py-2 mr-3 mb-3">
              <View className="w-2 h-2 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C]">Dark Romance</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-4 py-2 mr-3 mb-3">
              <View className="w-2 h-2 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C]">Horror</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-4 py-2 mr-3 mb-3">
              <View className="w-2 h-2 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C]">Dystopia</Text>
            </View>
          </View>

          <TouchableOpacity
            className="bg-[#ED6442] py-4 rounded-full flex-row justify-between px-6 items-center"
            onPress={() => router.replace("/adult-content")}
          >
            <Text className="text-white text-lg font-semibold">Enter</Text>
            <Feather name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View className="border border-zinc-400 rounded-3xl p-5 bg-[#FDF3E1]">
          <View className="flex-row justify-between items-start mb-4">
            <Text className="text-2xl font-bold text-[#151B2C]">Young Adventures</Text>
            <Text className="text-3xl">🚀</Text>
          </View>

          <View className="flex-row flex-wrap mb-8">
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-4 py-2 mr-3 mb-3">
              <View className="w-2 h-2 rounded-full bg-[#151B2C] mr-2" />
              <Text className="text-[#151B2C]">Fantasy</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-4 py-2 mr-3 mb-3">
              <View className="w-2 h-2 rounded-full bg-[#151B2C] mr-2" />
              <Text className="text-[#151B2C]">Mystery</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-4 py-2 mr-3 mb-3">
              <View className="w-2 h-2 rounded-full bg-[#151B2C] mr-2" />
              <Text className="text-[#151B2C]">Superheroes</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-4 py-2 mr-3 mb-3">
              <View className="w-2 h-2 rounded-full bg-[#151B2C] mr-2" />
              <Text className="text-[#151B2C]">STEM</Text>
            </View>
          </View>

          <TouchableOpacity
            className="bg-[#FBBF24] py-4 rounded-full flex-row justify-between px-6 items-center"
            onPress={() => router.replace("/adult-content")}
          >
            <Text className="text-[#151B2C] text-lg font-semibold">Let's Go</Text>
            <Feather name="arrow-right" size={20} color="#151B2C" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
