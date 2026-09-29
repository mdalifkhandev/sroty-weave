import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

export default function EndingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]">
      <ScrollView contentContainerClassName="px-6 pt-6 pb-10">
        
        <View className="flex-row items-center justify-between mb-8">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center"
          >
            <Feather name="arrow-left" size={24} color="#151B2C" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className="text-2xl font-bold text-[#151B2C] text-center">Ashmore Estate</Text>
            <Text className="text-sm text-[#151B2C]/70 text-center mt-1">One Correct Path</Text>
          </View>
          <View className="bg-zinc-200/50 rounded-full px-3 py-1.5 flex-row items-center">
            <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
            <Text className="text-[#151B2C] text-xs font-medium">8 Choices</Text>
          </View>
        </View>

        <View className="border border-[#151B2C] rounded-2xl p-4 mb-6 bg-[#FDF3E1] flex-row items-center">
          <View className="w-12 h-12 bg-[#FDE6C5] rounded-full items-center justify-center mr-4">
            <Text className="text-2xl">📍</Text>
          </View>
          <View className="flex-1">
            <Text className="text-sm font-semibold text-[#A16207] mb-1">The right path</Text>
            <Text className="text-[#151B2C] font-semibold text-base">You followed the clues instead of the noise.</Text>
          </View>
        </View>

        <View className="border border-[#ED6442] rounded-2xl p-5 mb-8 bg-[#FFF9F0]">
          <Text className="text-lg font-bold text-[#151B2C] mb-4">Your ending breakdown</Text>
          
          <View className="flex-row justify-between mb-3">
            <Text className="text-[#151B2C]/80 text-base">Choices made</Text>
            <Text className="text-[#151B2C] font-bold text-base">8</Text>
          </View>
          <View className="flex-row justify-between mb-3">
            <Text className="text-[#151B2C]/80 text-base">Clues found</Text>
            <Text className="text-[#151B2C] font-bold text-base">5 / 5</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-[#151B2C]/80 text-base">Path taken</Text>
            <Text className="text-[#151B2C] font-bold text-base">Correct</Text>
          </View>
        </View>

        <Text className="text-[#151B2C]/90 leading-6 mb-10 text-base">
          Victor Ashmore and Ms. Crane are arrested before dawn. Elara Harlow receives a letter from an estate solicitor in early November. The codicil is authenticated within the week. You solved it. Every clue was there from the beginning the boot print, the chemical smell, the two words in different handwriting at the bottom of a dead man's final entry.
        </Text>

        <PrimaryButton 
          title="Play Again" 
          onPress={() => router.push("/adult-mystery-library")} 
        />
        <SecondaryButton 
          title="Back to library" 
          className="mt-3"
          onPress={() => router.push("/adult-mystery-library")} 
        />

      </ScrollView>
    </SafeAreaView>
  );
}
