import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import PrimaryButton from "../../components/PrimaryButton";

export default function GenerateStoryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]">
      <ScrollView contentContainerClassName="px-6 pt-6 pb-10">
        
        <View className="flex-row items-start mb-10">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center mr-4"
          >
            <Feather name="arrow-left" size={24} color="#151B2C" />
          </TouchableOpacity>
          <View className="flex-1 pt-1">
            <Text className="text-2xl font-bold text-[#151B2C] text-center mr-16">Generate a Story</Text>
            <Text className="text-sm text-[#151B2C]/70 text-center mr-16 mt-1">Pick a mode and genre. Claude builds an original story with single path rules.</Text>
          </View>
        </View>

        <View className="mb-8">
          <Text className="text-xl font-bold text-[#151B2C] mb-4">Mode</Text>
          <View className="flex-row space-x-4">
            <TouchableOpacity className="flex-1 border border-[#151B2C] rounded-2xl py-6 items-center bg-[#FDF3E1] mr-2">
              <Text className="text-3xl mb-2">📦</Text>
              <Text className="font-semibold text-[#151B2C]">Mystery</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 border border-[#151B2C] rounded-2xl py-6 items-center bg-[#FDF3E1] ml-2">
              <Text className="text-3xl mb-2">📜</Text>
              <Text className="font-semibold text-[#151B2C]">Quest</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-10">
          <Text className="text-xl font-bold text-[#151B2C] mb-4">Genre - Psych Thriller</Text>
          <View className="flex-row space-x-4 mb-4">
            <TouchableOpacity className="flex-1 border border-[#151B2C] rounded-2xl py-6 items-center bg-[#FDF3E1] mr-2">
              <Text className="text-3xl mb-2">🎭</Text>
              <Text className="font-semibold text-[#151B2C]">Psych Thriller</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 border border-[#151B2C] rounded-2xl py-6 items-center bg-[#FDF3E1] ml-2">
              <Text className="text-3xl mb-2">🌹</Text>
              <Text className="font-semibold text-[#151B2C]">Dark Romance</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row space-x-4">
            <TouchableOpacity className="flex-1 border border-[#151B2C] rounded-2xl py-6 items-center bg-[#FDF3E1] mr-2">
              <Text className="text-3xl mb-2">⚔️</Text>
              <Text className="font-semibold text-[#151B2C]">Epic Fantasy</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 border border-[#151B2C] rounded-2xl py-6 items-center bg-[#FDF3E1] ml-2">
              <Text className="text-3xl mb-2">🪄</Text>
              <Text className="font-semibold text-[#151B2C]">Urban Fantasy</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
      <View className="px-6 pb-6">
        <PrimaryButton title="Generate Story" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}
