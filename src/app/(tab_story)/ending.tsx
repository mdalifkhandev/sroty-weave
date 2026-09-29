import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useStory } from "../../context/StoryContext";

export default function EndingScreen() {
  const router = useRouter();
  const { pathHistory, unlockedClues, totalCluesAvailable, isCorrectPath, resetStory } = useStory();

  const handlePlayAgain = () => {
    resetStory();
    router.push("/(tab_story)" as any);
  };

  const handleBackToLibrary = () => {
    resetStory();
    router.push("/(tabs)/library" as any);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-10">
        
        {/* Header */}
        <View className="flex-row items-center mb-8">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center mr-4"
          >
            <Feather name="arrow-left" size={24} color="#151B2C" />
          </TouchableOpacity>
          <View className="flex-1 flex-row justify-between items-center">
            <View>
              <Text className="text-xl font-bold text-[#151B2C]">Ashmore Estate</Text>
              <Text className="text-sm text-[#151B2C]/70">One Correct Path</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C] text-xs font-bold">{pathHistory.length} Choices</Text>
            </View>
          </View>
        </View>

        {/* Path Status */}
        <View className={`border rounded-2xl p-4 mb-6 flex-row items-center ${isCorrectPath ? 'border-[#ED6442] bg-white' : 'border-[#151B2C] bg-white'}`}>
          <View className={`w-10 h-10 rounded-xl items-center justify-center mr-4 ${isCorrectPath ? 'bg-[#FBBF24]/30' : 'bg-zinc-200/50'}`}>
            <Text className="text-xl">{isCorrectPath ? '🏅' : '💔'}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-[#151B2C]/70 text-xs font-bold uppercase tracking-wider mb-0.5">
              {isCorrectPath ? 'The right path' : 'Wrong turn'}
            </Text>
            <Text className="text-[#151B2C] font-semibold text-sm">
              {isCorrectPath 
                ? 'You followed the clues instead of the noise.' 
                : 'You missed a critical piece of evidence.'}
            </Text>
          </View>
        </View>

        {/* Ending Breakdown */}
        <View className="border border-[#151B2C] rounded-3xl p-5 mb-8 bg-[#FDF3E1]">
          <Text className="text-lg font-bold text-[#151B2C] mb-4">Your ending breakdown</Text>
          
          <View className="border-t border-[#151B2C]/10 py-3 flex-row justify-between items-center">
            <Text className="text-[#151B2C]/70">Choices made</Text>
            <Text className="text-[#151B2C] font-bold">{pathHistory.length}</Text>
          </View>
          
          <View className="border-t border-[#151B2C]/10 py-3 flex-row justify-between items-center">
            <Text className="text-[#151B2C]/70">Clues found</Text>
            <Text className="text-[#151B2C] font-bold">{unlockedClues.length} / {totalCluesAvailable}</Text>
          </View>
          
          <View className="border-t border-[#151B2C]/10 pt-3 flex-row justify-between items-center">
            <Text className="text-[#151B2C]/70">Path taken</Text>
            <Text className={`font-bold ${isCorrectPath ? 'text-green-700' : 'text-[#ED6442]'}`}>
              {isCorrectPath ? 'Correct' : 'Incorrect'}
            </Text>
          </View>
        </View>

        {/* Narrative Conclusion */}
        <Text className="text-[#151B2C] text-sm leading-6 mb-10">
          {isCorrectPath 
            ? "Victor Ashmore and Ms. Crane are arrested before dawn. Elara Harlow receives a letter from an estate solicitor in early November. The codicil is authenticated within the week. You solved it. Every clue was there from the beginning: the boot print, the chemical smell, the two words in different handwriting at the bottom of a dead man's final entry."
            : "The trail goes cold. By the time you piece the evidence back together, the estate has been sold and the true culprits have vanished. The Ashmore Estate remains an unsolved tragedy."}
        </Text>

        {/* Action Buttons */}
        <TouchableOpacity 
          onPress={handlePlayAgain}
          className="bg-[#ED6442] py-4 rounded-full flex-row justify-center items-center mb-4"
        >
          <Text className="text-white font-bold text-lg mr-2">Play Again</Text>
          <Feather name="arrow-right" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={handleBackToLibrary}
          className="border border-[#151B2C] py-4 rounded-full flex-row justify-center items-center"
        >
          <Text className="text-[#151B2C] font-bold text-lg">Back to library</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
