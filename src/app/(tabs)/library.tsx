import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function LibraryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <View className="px-6 pt-6 pb-4">
        <Text className="text-3xl font-bold text-[#151B2C]">Your Library</Text>
      </View>

      {/* Filter Pills */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-6 mb-6" contentContainerClassName="pr-12">
          <TouchableOpacity className="bg-[#ED6442] rounded-full px-5 py-2 mr-3">
            <Text className="text-white font-medium">All</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-zinc-200/50 rounded-full px-4 py-2 mr-3 border border-zinc-300/50">
            <Text className="text-[#151B2C]">Ongoing</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-zinc-200/50 rounded-full px-4 py-2 mr-3 border border-zinc-300/50">
            <Text className="text-[#151B2C]">Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-zinc-200/50 rounded-full px-4 py-2 mr-3 border border-zinc-300/50">
            <Text className="text-[#151B2C]">AI Generated</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView contentContainerClassName="px-6 pb-24">
        
        {/* Ongoing Story */}
        <Text className="text-xl font-bold text-[#151B2C] mb-4">Ongoing</Text>
        
        <View className="border border-[#151B2C] rounded-3xl p-4 bg-[#FDF3E1] mb-8">
          <View className="flex-row">
            <View className="w-20 h-24 bg-[#FBBF24] rounded-2xl items-center justify-center mr-4">
              <Text className="text-3xl">🏰</Text>
            </View>
            <View className="flex-1 justify-center">
              <Text className="text-[#ED6442] text-xs font-bold mb-1 uppercase tracking-wider">Mystery</Text>
              <Text className="text-lg font-bold text-[#151B2C] mb-3">The Ashford Vanishing</Text>
              
              <View className="flex-row items-center">
                <View className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden mr-3 border border-zinc-300/50">
                  <View className="w-[62%] h-full bg-[#ED6442] rounded-full" />
                </View>
                <Text className="text-[#151B2C]/70 text-xs font-medium">62%</Text>
              </View>
            </View>
          </View>
          <View className="mt-5 flex-row justify-end space-x-3">
            <TouchableOpacity className="border border-[#151B2C] py-2.5 px-5 rounded-full flex-1 items-center">
              <Text className="text-[#151B2C] font-semibold">Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#ED6442] py-2.5 px-5 rounded-full flex-1 items-center">
              <Text className="text-white font-semibold">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* AI Generated */}
        <Text className="text-xl font-bold text-[#151B2C] mb-4">AI Generated</Text>

        <TouchableOpacity className="border border-[#151B2C] rounded-3xl p-5 mb-8 bg-zinc-800 flex-row items-center">
          <View className="w-14 h-14 bg-zinc-700 rounded-2xl items-center justify-center mr-4">
            <Text className="text-2xl">🤖</Text>
          </View>
          <View className="flex-1">
             <View className="flex-row items-center mb-1">
               <View className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] mr-2" />
               <Text className="text-[#FBBF24] text-xs font-bold uppercase tracking-wider">Sci-Fi Thriller</Text>
             </View>
             <Text className="text-white text-lg font-bold mb-1">Neon Shadows</Text>
             <Text className="text-zinc-400 text-xs">Generated on Oct 12</Text>
          </View>
          <Feather name="chevron-right" size={20} color="white" />
        </TouchableOpacity>

        {/* Completed */}
        <Text className="text-xl font-bold text-[#151B2C] mb-4">Completed Adventures</Text>

        <View className="border border-[#151B2C] rounded-3xl p-5 mb-4 bg-[#FDE6C5]">
          <View className="flex-row justify-between items-start mb-3">
            <View>
              <Text className="text-[#ED6442] text-xs font-bold mb-1 uppercase tracking-wider">Mystery</Text>
              <Text className="text-lg font-bold text-[#151B2C]">The Ashmore Estate</Text>
            </View>
            <View className="w-10 h-10 bg-white/50 rounded-full items-center justify-center">
              <Text className="text-xl">🏆</Text>
            </View>
          </View>
          
          <View className="bg-white/40 rounded-xl p-3 mb-4">
             <View className="flex-row justify-between items-center mb-2">
               <Text className="text-[#151B2C]/70 text-sm">Clues Found</Text>
               <Text className="text-[#151B2C] font-bold text-sm">5 / 5</Text>
             </View>
             <View className="flex-row justify-between items-center">
               <Text className="text-[#151B2C]/70 text-sm">Path Taken</Text>
               <Text className="text-green-700 font-bold text-sm">Correct</Text>
             </View>
          </View>

          <TouchableOpacity className="bg-[#151B2C] py-3 rounded-full items-center">
            <Text className="text-white font-semibold">Replay Story</Text>
          </TouchableOpacity>
        </View>

        <View className="border border-[#151B2C] rounded-3xl p-5 mb-8 bg-[#FDF3E1]">
          <View className="flex-row justify-between items-start mb-3">
            <View>
              <Text className="text-[#ED6442] text-xs font-bold mb-1 uppercase tracking-wider">Quest</Text>
              <Text className="text-lg font-bold text-[#151B2C]">The Lost Crown</Text>
            </View>
            <View className="w-10 h-10 bg-zinc-200/50 rounded-full items-center justify-center">
              <Text className="text-xl">💔</Text>
            </View>
          </View>
          
          <View className="bg-zinc-200/30 rounded-xl p-3 mb-4">
             <View className="flex-row justify-between items-center mb-2">
               <Text className="text-[#151B2C]/70 text-sm">Choices Made</Text>
               <Text className="text-[#151B2C] font-bold text-sm">12</Text>
             </View>
             <View className="flex-row justify-between items-center">
               <Text className="text-[#151B2C]/70 text-sm">Path Taken</Text>
               <Text className="text-[#ED6442] font-bold text-sm">Tragic Ending</Text>
             </View>
          </View>

          <TouchableOpacity className="border border-[#151B2C] py-3 rounded-full items-center">
            <Text className="text-[#151B2C] font-semibold">Try Another Path</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
