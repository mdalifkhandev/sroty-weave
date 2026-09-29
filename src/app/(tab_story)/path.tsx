import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function PathScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-32">
        
        <View className="flex-row items-center mb-10">
          <TouchableOpacity 
            onPress={() => router.back()}
            className="w-12 h-12 bg-zinc-200/50 rounded-full items-center justify-center mr-4"
          >
            <Feather name="arrow-left" size={24} color="#151B2C" />
          </TouchableOpacity>
          <View className="flex-1">
            <Text className="text-2xl font-bold text-[#151B2C] text-center mr-16">Your Path</Text>
            <Text className="text-sm text-[#151B2C]/70 text-center mr-16 mt-1">2 choices made</Text>
          </View>
        </View>

        <View className="flex-row">
          <View className="w-8 items-center mr-2">
            <View className="w-1.5 h-1.5 rounded-full bg-[#151B2C] mt-6" />
            <View className="w-[1px] h-24 bg-[#151B2C]/20" />
            <View className="w-1.5 h-1.5 rounded-full bg-[#151B2C]" />
            <View className="w-[1px] h-24 bg-[#151B2C]/20" />
            <View className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
          </View>

          <View className="flex-1">
            <View className="border border-[#151B2C] rounded-xl p-4 mb-4 bg-[#FDF3E1]">
              <Text className="text-base font-bold text-[#151B2C] mb-1">Choice 1</Text>
              <Text className="text-[#151B2C]/80 leading-5">The greenhouse someone fled through it recently</Text>
            </View>

            <View className="border border-[#151B2C] rounded-xl p-4 mb-4 bg-[#FDE6C5]">
              <Text className="text-base font-bold text-[#151B2C] mb-1">Choice 2</Text>
              <Text className="text-[#151B2C]/80 leading-5">Read Harlow's journal the chemical smell is a deliberate signal.</Text>
            </View>

            <View className="border border-[#151B2C] rounded-xl p-4 mb-4 bg-[#FBBF24]">
              <Text className="text-base font-bold text-[#151B2C] mb-1">You're here</Text>
              <Text className="text-[#151B2C]/80 leading-5">The clues align. It's time to decide where the investigation leads next.</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
