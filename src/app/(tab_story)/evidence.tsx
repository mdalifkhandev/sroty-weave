import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function EvidenceScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-32">
        
        <View className="flex-row items-center mb-6">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center mr-4"
          >
            <Feather name="arrow-left" size={24} color="#151B2C" />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-2xl font-bold text-[#151B2C] text-center mr-16">Evidence Board</Text>
            <Text className="text-sm text-[#151B2C]/70 text-center mr-16 mt-1">Your notes</Text>
          </View>
        </View>

        {/* Progress bars */}
        <View className="flex-row space-x-2 mb-8">
          <View className="flex-1 h-1.5 bg-[#ED6442] rounded-full" />
          <View className="flex-1 h-1.5 bg-[#ED6442] rounded-full" />
          <View className="flex-1 h-1.5 bg-[#ED6442] rounded-full" />
          <View className="flex-1 h-1.5 bg-zinc-300 rounded-full" />
          <View className="flex-1 h-1.5 bg-zinc-300 rounded-full" />
        </View>

        <View className="border border-[#151B2C] rounded-2xl p-5 mb-4 bg-[#FDF3E1]">
          <Text className="text-lg font-bold text-[#151B2C] mb-2">How this works</Text>
          <Text className="text-[#151B2C]/80 leading-5">
            Notes appear when you choose correctly. Every detail in the prose is a hint.
          </Text>
        </View>

        <View className="border border-[#ED6442] rounded-2xl p-5 mb-4 bg-[#FFF9F0]">
          <View className="flex-row justify-between items-start mb-2">
            <Text className="text-lg font-bold text-[#151B2C]">Note 1</Text>
            <Text className="text-2xl">🌅</Text>
          </View>
          <Text className="text-[#151B2C]/80 leading-5">
            Blue orchids harvested in the greenhouse their resin yields a sedative compound. The brass mortar holds concentrated paste.
          </Text>
        </View>

        <View className="border border-dashed border-[#151B2C]/50 rounded-2xl p-8 mb-4 bg-[#FDF3E1] items-center justify-center">
          <Text className="text-3xl mb-3">📍</Text>
          <Text className="text-lg font-bold text-[#151B2C] mb-1">4 more notes to find.</Text>
          <Text className="text-[#151B2C]/70">Follow the correct path</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
