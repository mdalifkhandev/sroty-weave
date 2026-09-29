import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useStory } from "../../context/StoryContext";

export default function PathScreen() {
  const router = useRouter();
  const { pathHistory } = useStory();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-24">
        
        {/* Header */}
        <View className="flex-row items-center mb-10">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center mr-4"
          >
            <Feather name="arrow-left" size={24} color="#151B2C" />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-xl font-bold text-[#151B2C] text-center mr-16">Your Path</Text>
            <Text className="text-sm text-[#151B2C]/70 text-center mr-16">{pathHistory.length} choices made</Text>
          </View>
        </View>

        {/* Timeline */}
        <View className="ml-2">
          {pathHistory.map((historyItem, index) => (
            <View key={index} className="flex-row mb-6 relative">
              <View className="w-1 h-full bg-[#151B2C] absolute left-1 top-4 -bottom-6" />
              <View className="w-3 h-3 rounded-full bg-[#151B2C] mt-4 mr-4" />
              
              <View className="flex-1 border border-[#151B2C] rounded-2xl p-4 bg-white">
                <Text className="text-[#151B2C] font-bold mb-1">Choice {index + 1}</Text>
                <Text className="text-[#151B2C]/80 text-sm leading-5">{historyItem.choiceText}</Text>
              </View>
            </View>
          ))}

          {/* Current Position */}
          <View className="flex-row relative">
            <View className="w-3 h-3 rounded-full bg-[#FBBF24] mt-4 mr-4" />
            
            <View className="flex-1 border border-[#ED6442] rounded-2xl p-4 bg-[#FBBF24]">
              <Text className="text-[#151B2C] font-bold mb-1">You're here</Text>
              <Text className="text-[#151B2C]/80 text-sm leading-5">The clues align. It's time to decide where the investigation leads next.</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
