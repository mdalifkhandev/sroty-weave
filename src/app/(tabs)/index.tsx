import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-10">
        
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <View className="w-10 h-10 bg-[#ED6442] rounded-xl items-center justify-center mr-3">
              <Feather name="book-open" size={20} color="white" />
            </View>
            <Text className="text-xl font-bold text-[#151B2C]">StoryWeave</Text>
          </View>
          <View className="flex-row items-center">
            <TouchableOpacity className="mr-5">
              <Feather name="bell" size={24} color="#151B2C" />
              <View className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#ED6442] rounded-full border border-[#FDF3E1]" />
            </TouchableOpacity>
            <View className="w-10 h-10 bg-zinc-300 rounded-full items-center justify-center overflow-hidden">
               <Text className="text-xl">👨‍💻</Text>
            </View>
          </View>
        </View>

        {/* Greeting */}
        <Text className="text-[#151B2C]/70 text-base mb-1">Good evening, Alex</Text>
        <Text className="text-3xl font-bold text-[#151B2C] leading-10 mb-8">
          Where will your imagination take you?
        </Text>

        {/* Modes */}
        <View className="space-y-4 mb-10">
          <TouchableOpacity 
            className="flex-row items-center border border-[#151B2C] rounded-3xl p-4 bg-[#FDF3E1]"
            onPress={() => router.push("/(core)/adult-mystery-library" as any)}
          >
            <View className="w-12 h-12 bg-[#ED6442]/10 rounded-2xl items-center justify-center mr-4">
              <Feather name="target" size={24} color="#ED6442" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-bold text-[#151B2C] mb-1">Solve a Mystery</Text>
              <Text className="text-[#151B2C]/70 text-sm leading-5 pr-4">Follow clues, make decisions and uncover the truth.</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#151B2C" />
          </TouchableOpacity>

          <TouchableOpacity 
            className="flex-row items-center border border-[#151B2C] rounded-3xl p-4 bg-[#FDF3E1] mt-4"
            onPress={() => router.push("/(core)/generate-story" as any)}
          >
            <View className="w-12 h-12 bg-[#ED6442]/10 rounded-2xl items-center justify-center mr-4">
              <Feather name="cpu" size={24} color="#ED6442" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-bold text-[#151B2C] mb-1">Generate a Story</Text>
              <Text className="text-[#151B2C]/70 text-sm leading-5 pr-4">Create a personalized AI-powered story.</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#151B2C" />
          </TouchableOpacity>

          <TouchableOpacity 
            className="flex-row items-center border border-[#151B2C] rounded-3xl p-4 bg-[#FDF3E1] mt-4"
          >
            <View className="w-12 h-12 bg-[#ED6442]/10 rounded-2xl items-center justify-center mr-4">
              <Feather name="compass" size={24} color="#ED6442" />
            </View>
            <View className="flex-1">
              <Text className="text-lg font-bold text-[#151B2C] mb-1">Explore Stories</Text>
              <Text className="text-[#151B2C]/70 text-sm leading-5 pr-4">Discover stories across different genres.</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#151B2C" />
          </TouchableOpacity>
        </View>

        {/* Continue Reading */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-[#151B2C]">Continue Reading</Text>
          <TouchableOpacity>
            <Text className="text-[#ED6442] font-semibold">History</Text>
          </TouchableOpacity>
        </View>

        <View className="border border-[#151B2C] rounded-3xl p-4 bg-[#FDF3E1] mb-10">
          <View className="flex-row">
            <View className="w-20 h-24 bg-[#FBBF24] rounded-2xl items-center justify-center mr-4">
              <Text className="text-3xl">🏰</Text>
            </View>
            <View className="flex-1 justify-center">
              <Text className="text-[#ED6442] text-xs font-bold mb-1 uppercase tracking-wider">Mystery</Text>
              <Text className="text-lg font-bold text-[#151B2C] mb-3">The Ashford Vanishing</Text>
              
              <View className="flex-row items-center">
                <View className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden mr-3">
                  <View className="w-[62%] h-full bg-[#ED6442] rounded-full" />
                </View>
                <Text className="text-[#151B2C]/70 text-xs font-medium">62%</Text>
              </View>
            </View>
            <View className="justify-center ml-2">
              <TouchableOpacity className="bg-[#ED6442] py-2 px-4 rounded-full">
                <Text className="text-white font-semibold">Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Popular Stories */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold text-[#151B2C]">Popular Stories</Text>
          <TouchableOpacity>
            <Text className="text-[#ED6442] font-semibold">See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible -mx-6 px-6 pb-4">
          {/* Card 1 */}
          <TouchableOpacity className="w-48 mr-4">
            <View className="w-full h-64 bg-zinc-200 rounded-3xl mb-3 items-center justify-center overflow-hidden border border-[#151B2C]/10">
              <Text className="text-6xl mb-2">🏰</Text>
              <View className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full">
                <Text className="text-[#151B2C] text-xs font-bold">Free</Text>
              </View>
            </View>
            <Text className="text-[#ED6442] text-xs font-bold mb-1 uppercase tracking-wider">Mystery</Text>
            <Text className="text-base font-bold text-[#151B2C] leading-5 mb-1">The Ashford Vanishing</Text>
            <Text className="text-[#151B2C]/60 text-xs">35 min</Text>
          </TouchableOpacity>

          {/* Card 2 */}
          <TouchableOpacity className="w-48 mr-4">
            <View className="w-full h-64 bg-[#FDE6C5] rounded-3xl mb-3 items-center justify-center overflow-hidden border border-[#151B2C]/10">
              <Text className="text-6xl mb-2">🌅</Text>
              <View className="absolute top-3 left-3 bg-[#ED6442]/10 border border-[#ED6442]/30 px-3 py-1 rounded-full flex-row items-center">
                <Feather name="award" size={12} color="#ED6442" style={{marginRight: 4}} />
                <Text className="text-[#ED6442] text-xs font-bold">Premium</Text>
              </View>
            </View>
            <Text className="text-[#ED6442] text-xs font-bold mb-1 uppercase tracking-wider">Fantasy</Text>
            <Text className="text-base font-bold text-[#151B2C] leading-5 mb-1">The Lantern Keeper</Text>
            <Text className="text-[#151B2C]/60 text-xs">28 min</Text>
          </TouchableOpacity>
          
          {/* Card 3 */}
          <TouchableOpacity className="w-48 mr-6">
            <View className="w-full h-64 bg-zinc-400 rounded-3xl mb-3 items-center justify-center overflow-hidden border border-[#151B2C]/10">
              <Text className="text-6xl mb-2">🌃</Text>
              <View className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full">
                <Text className="text-[#151B2C] text-xs font-bold">Free</Text>
              </View>
            </View>
            <Text className="text-[#ED6442] text-xs font-bold mb-1 uppercase tracking-wider">Thriller</Text>
            <Text className="text-base font-bold text-[#151B2C] leading-5 mb-1">Redline</Text>
            <Text className="text-[#151B2C]/60 text-xs">42 min</Text>
          </TouchableOpacity>
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}
