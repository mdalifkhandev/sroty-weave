import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, ArrowRight } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function ReadingHistoryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-10">
        
        {/* Header */}
        <View className="flex-row items-center mb-8 relative justify-center">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="absolute left-0 w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center"
          >
            <ArrowLeft size={24} color="#151B2C" />
          </TouchableOpacity>
          <View className="items-center">
            <Text className="text-2xl font-bold text-[#151B2C]">Reading History</Text>
            <Text className="text-[#151B2C]/70 text-sm mt-1">Your completed and in-progress stories.</Text>
          </View>
        </View>

        {/* Account / Completed */}
        <Text className="text-xl font-bold text-[#151B2C] mb-4">Account</Text>
        
        {/* Completed Card 1 */}
        <View className="border border-[#151B2C] rounded-3xl p-5 mb-4 bg-[#FDF3E1]">
          <View className="flex-row justify-between items-start mb-2">
            <Text className="text-lg font-bold text-[#151B2C]">The Ashmore Estate</Text>
            <TouchableOpacity>
              <Text className="text-[#ED6442] font-semibold text-sm">Replay</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center mb-5">
            <View className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2" />
            <Text className="text-green-600 text-sm">The Right Path</Text>
          </View>
          
          <View className="flex-row space-x-2">
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5 border border-[#151B2C]/5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C] text-xs font-medium">8 Choices</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5 border border-[#151B2C]/5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C] text-xs font-medium">5/5 Clues</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5 border border-[#151B2C]/5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C] text-xs font-medium">Completed</Text>
            </View>
          </View>
        </View>

        {/* Completed Card 2 */}
        <View className="border border-[#151B2C] rounded-3xl p-5 mb-8 bg-[#FDF3E1]">
          <View className="flex-row justify-between items-start mb-2">
            <Text className="text-lg font-bold text-[#151B2C]">The Last Deal</Text>
            <TouchableOpacity>
              <Text className="text-[#ED6442] font-semibold text-sm">Replay</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center mb-5">
            <View className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2" />
            <Text className="text-green-600 text-sm">Route to Ruin</Text>
          </View>
          
          <View className="flex-row space-x-2">
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5 border border-[#151B2C]/5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C] text-xs font-medium">6 Choices</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5 border border-[#151B2C]/5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C] text-xs font-medium">Quest</Text>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5 border border-[#151B2C]/5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C] text-xs font-medium">Completed</Text>
            </View>
          </View>
        </View>

        {/* In Progress */}
        <Text className="text-xl font-bold text-[#151B2C] mb-4">In Progress</Text>
        
        <View className="border border-[#151B2C] rounded-3xl p-5 mb-8 bg-[#FDF3E1]">
          <View className="flex-row justify-between items-start mb-4">
            <Text className="text-lg font-bold text-[#151B2C]">The Ashmore Estate</Text>
            <TouchableOpacity>
              <Text className="text-[#ED6442] font-semibold text-sm">Replay</Text>
            </TouchableOpacity>
          </View>

          {/* Progress Bar Segments */}
          <View className="flex-row space-x-1 mb-2">
            <View className="flex-1 h-2 rounded-full bg-[#ED6442]" />
            <View className="flex-1 h-2 rounded-full bg-[#ED6442]" />
            <View className="flex-1 h-2 rounded-full bg-[#ED6442]" />
            <View className="flex-1 h-2 rounded-full bg-zinc-200" />
            <View className="flex-1 h-2 rounded-full bg-zinc-200" />
          </View>
          
          <View className="flex-row justify-between mb-6">
            <Text className="text-[#151B2C] text-sm font-medium">3 Choices</Text>
            <Text className="text-[#151B2C]/70 text-sm">3/5 clues</Text>
          </View>
          
          <TouchableOpacity 
            className="bg-[#ED6442] py-4 rounded-full flex-row justify-center items-center w-full"
          >
            <Text className="text-white font-bold text-base mr-2">Continue</Text>
            <ArrowRight size={20} color="white" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
