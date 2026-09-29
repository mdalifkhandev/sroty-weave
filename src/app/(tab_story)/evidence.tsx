import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useStory } from "../../context/StoryContext";

export default function EvidenceBoardScreen() {
  const router = useRouter();
  const { unlockedClues, totalCluesAvailable } = useStory();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-24">
        
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center mr-4"
          >
            <Feather name="arrow-left" size={24} color="#151B2C" />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-xl font-bold text-[#151B2C] text-center mr-16">Evidence Board</Text>
            <Text className="text-sm text-[#151B2C]/70 text-center mr-16">Your notes</Text>
          </View>
        </View>

        {/* Progress */}
        <View className="flex-row space-x-2 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <View 
              key={i} 
              className={`flex-1 h-1 rounded-full ${i < unlockedClues.length ? 'bg-[#ED6442]' : 'bg-zinc-200/50'}`}
            />
          ))}
        </View>

        {/* Instructions */}
        <View className="border border-[#151B2C] rounded-2xl p-4 bg-white mb-6">
          <Text className="text-base font-bold text-[#151B2C] mb-1">How this works</Text>
          <Text className="text-[#151B2C]/70 text-sm leading-5">
            Notes appear when you choose correctly. Every detail in the prose is a hint.
          </Text>
        </View>

        {/* Clues */}
        {unlockedClues.map((clue) => (
          <View key={clue.id} className="border border-[#ED6442] rounded-3xl p-5 bg-white mb-4 shadow-sm relative overflow-hidden">
            <Text className="text-base font-bold text-[#151B2C] mb-2">{clue.title}</Text>
            <Text className="text-[#151B2C]/80 text-sm leading-5 pr-8">
              {clue.description}
            </Text>
            <View className="absolute right-4 top-4">
               <Text className="text-2xl opacity-80">✨</Text>
            </View>
          </View>
        ))}

        {/* Remaining Clues */}
        {totalCluesAvailable - unlockedClues.length > 0 && (
          <View className="border border-dashed border-[#151B2C]/30 rounded-3xl p-6 bg-zinc-200/30 items-center justify-center mt-2 mb-10">
            <Text className="text-3xl mb-2">🧩</Text>
            <Text className="text-base font-bold text-[#151B2C] mb-1 text-center">
              {totalCluesAvailable - unlockedClues.length} more notes to find.
            </Text>
            <Text className="text-[#151B2C]/70 text-sm text-center">
              Follow the correct path
            </Text>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}
