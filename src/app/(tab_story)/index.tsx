import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function StoryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-32">
        
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center"
          >
            <Feather name="arrow-left" size={24} color="#151B2C" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-[#151B2C] text-center">The Missing Fossil</Text>
            <Text className="text-sm text-[#151B2C]/70 text-center mt-1">One Correct Path</Text>
          </View>
          <View className="bg-zinc-200/50 rounded-full px-3 py-1.5 flex-row items-center">
            <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
            <Text className="text-[#151B2C] text-xs font-medium">8 Choices</Text>
          </View>
        </View>

        <View className="w-full h-48 bg-[#FBBF24] rounded-3xl mb-6 items-center justify-center overflow-hidden">
          <Text className="text-6xl">🧸</Text>
        </View>

        <Text className="text-[#151B2C]/90 leading-6 mb-6 text-base">
          Arlo Chen is performing calm in the specific way of someone who has been practicing since approximately 6:55am. His jacket's left cuff has a thin violet thread caught on the button matching the felt lining of the display case exactly. His knuckles have traces of archival foam dust. He watches you look at his hands. His shoulders move upward by approximately one centimeter.
        </Text>

        <Text className="text-[#151B2C]/70 text-sm mb-4">
          Read Carefully - What do you do?
        </Text>

        <TouchableOpacity 
          className="mb-4"
          onPress={() => router.push("/(tab_story)/ending" as any)}
        >
          <Text className="text-[#151B2C] font-bold text-base leading-6">
            Ask him about the purple thread it's specific physical evidence connecting him to the case
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="mb-6">
          <Text className="text-[#151B2C] font-bold text-base leading-6">
            Ask why his keycard shows two entries this morning
          </Text>
        </TouchableOpacity>

        <Text className="text-[#151B2C]/70 text-sm leading-5">
          One choice moves the investigation forward. The other may not. Use what you've read.
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}
