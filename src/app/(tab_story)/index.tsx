import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useStory } from "../../context/StoryContext";

export default function StoryReaderScreen() {
  const router = useRouter();
  const { currentNode, handleChoice, pathHistory } = useStory();

  const handleChoicePress = (choiceId: string, nextNodeId: string, choiceText: string, isCorrect?: boolean) => {
    handleChoice(choiceId, nextNodeId, choiceText, isCorrect);
    
    // Check if the next node is an ending node
    // A quick hack is just check if it's node_end_success or node_bad
    if (nextNodeId.includes("end") || nextNodeId.includes("bad")) {
      router.push("/(tab_story)/ending" as any);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-24">
        
        {/* Header */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity 
            onPress={() => router.canGoBack() ? router.back() : router.replace("/(tabs)" as any)}
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

        {/* Story Content */}
        <View className="w-full h-48 bg-[#FBBF24] rounded-3xl mb-6 items-center justify-center overflow-hidden border border-[#151B2C]/10">
          <Text className="text-6xl">📖</Text>
        </View>

        {currentNode.text.map((paragraph, index) => (
          <Text key={index} className="text-[#151B2C] text-base leading-7 mb-4">
            {paragraph}
          </Text>
        ))}

        {currentNode.cluesToUnlock && currentNode.cluesToUnlock.length > 0 && (
          <View className="border border-[#151B2C] rounded-2xl p-4 mb-6 flex-row items-center bg-white">
            <View className="w-10 h-10 bg-[#FBBF24]/20 rounded-xl items-center justify-center mr-3">
              <Text className="text-xl">📝</Text>
            </View>
            <View className="flex-1">
              <Text className="text-[#151B2C]/70 text-xs font-bold uppercase tracking-wider mb-0.5">Note Added</Text>
              <Text className="text-[#151B2C] font-semibold text-sm">Check your Evidence tab to review.</Text>
            </View>
          </View>
        )}

        {/* Choices */}
        {!currentNode.isEnding && (
          <View className="mt-4 mb-10">
            {currentNode.question && (
              <Text className="text-[#151B2C]/70 text-sm mb-4">
                {currentNode.question}
              </Text>
            )}

            {currentNode.choices.map((choice) => (
              <TouchableOpacity 
                key={choice.id}
                className="mb-4"
                onPress={() => handleChoicePress(choice.id, choice.nextNodeId, choice.text, choice.isCorrect)}
              >
                <Text className="text-[#151B2C] font-bold text-base leading-6">
                  {choice.text}
                </Text>
              </TouchableOpacity>
            ))}

            <Text className="text-[#151B2C]/50 text-xs italic mt-4">
              One choice moves the investigation forward. The other may not. Use what you've read.
            </Text>
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}
