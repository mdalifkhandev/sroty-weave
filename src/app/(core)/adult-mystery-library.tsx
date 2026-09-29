import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import PrimaryButton from "../../components/PrimaryButton";

export default function AdultMysteryLibraryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]">
      <ScrollView contentContainerClassName="px-6 pt-6 pb-10">
        
        <View className="flex-row items-center mb-6">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center mr-4"
          >
            <Feather name="arrow-left" size={24} color="#151B2C" />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-2xl font-bold text-[#151B2C] text-center mr-16">Mystery Library</Text>
            <Text className="text-sm text-[#151B2C]/70 text-center mr-16 mt-1">One correct path per story</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8 overflow-visible">
          <View className="flex-row py-2">
            <TouchableOpacity className="bg-[#ED6442] rounded-full px-5 py-2 mr-3">
              <Text className="text-white font-medium">All</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-zinc-200/50 rounded-full px-4 py-2 mr-3 flex-row items-center">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C]">Mystery</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-zinc-200/50 rounded-full px-4 py-2 mr-3 flex-row items-center">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C]">Psych Thriller</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-zinc-200/50 rounded-full px-4 py-2 mr-3 flex-row items-center">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C]">Drama</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View className="border border-[#151B2C] rounded-3xl p-5 mb-5 bg-[#FDF3E1]">
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C] text-xs font-medium">Mystery / Detective</Text>
            </View>
            <Text className="text-2xl">🌅</Text>
          </View>
          
          <Text className="text-xl font-bold text-[#151B2C] mb-2">The Ashmore Estate</Text>
          <Text className="text-[#151B2C]/80 leading-5 mb-6">
            The police called it an accident in two hours. That as the first mistake.
          </Text>
          
          <PrimaryButton 
            title="Begin Story" 
            className="py-3" 
            onPress={() => router.push("/(tab_story)" as any)}
          />
        </View>

        <View className="border border-[#151B2C] rounded-3xl p-5 mb-5 bg-[#FDF3E1]">
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C] text-xs font-medium">Mystery / Detective</Text>
            </View>
            <Text className="text-2xl">🌅</Text>
          </View>
          
          <Text className="text-xl font-bold text-[#151B2C] mb-2">The Meridian House</Text>
          <Text className="text-[#151B2C]/80 leading-5 mb-6">
            She vanished from a locked apartment on the 8th floor. the cameras caught nothing by design.
          </Text>
          
          <PrimaryButton 
            title="Begin Story" 
            className="py-3" 
            onPress={() => router.push("/(tab_story)" as any)}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
