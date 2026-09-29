import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ScreenHeader } from "../../../components/ScreenHeader";
import { ProfileMenuItem } from "../../../components/ProfileMenuItem";
import { CustomButton } from "../../../components/CustomButton";

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    { title: "Reading History", route: "/profile/history" },
    { title: "Manage Subscription", route: "/profile/subscription" },
    { title: "Settings", route: "/profile/settings" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-32">
        
        {/* Header without back button */}
        <ScreenHeader title="Profile" />

        {/* User Info Card */}
        <View className="border border-[#151B2C] rounded-3xl p-5 mb-8 bg-[#FDF3E1]">
          <View className="flex-row items-center justify-between mb-6">
            <View className="flex-row items-center">
              <View className="w-16 h-16 bg-[#FDE6C5] rounded-full items-center justify-center mr-4 border border-[#151B2C]/10 overflow-hidden">
                <Text className="text-4xl">👦🏽</Text>
              </View>
              <View>
                <Text className="text-xl font-bold text-[#151B2C] mb-1">Charles</Text>
                <Text className="text-[#151B2C]/70 text-sm">Charles@example.com</Text>
              </View>
            </View>
            <View className="flex-row items-center bg-zinc-200/50 rounded-full px-3 py-1.5 border border-[#151B2C]/5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
              <Text className="text-[#151B2C] text-xs font-medium">Premium</Text>
            </View>
          </View>

          {/* Stats */}
          <View className="flex-row justify-between space-x-3">
            <View className="flex-1 border border-[#151B2C] rounded-2xl py-4 items-center bg-[#FDF3E1]">
              <Text className="text-2xl font-bold text-[#151B2C] mb-1">12</Text>
              <Text className="text-[#151B2C]/70 text-sm">Stories</Text>
            </View>
            <View className="flex-1 border border-[#151B2C] rounded-2xl py-4 items-center bg-[#FDF3E1]">
              <Text className="text-2xl font-bold text-[#151B2C] mb-1">94</Text>
              <Text className="text-[#151B2C]/70 text-sm">Choices</Text>
            </View>
            <View className="flex-1 border border-[#151B2C] rounded-2xl py-4 items-center bg-[#FDF3E1]">
              <Text className="text-2xl font-bold text-[#151B2C] mb-1">03</Text>
              <Text className="text-[#151B2C]/70 text-sm">Solved</Text>
            </View>
          </View>
        </View>

        {/* Account Menu */}
        <Text className="text-lg font-bold text-[#151B2C] mb-4">Account</Text>
        <View className="mb-10">
          {menuItems.map((item, index) => (
            <ProfileMenuItem 
              key={index}
              label={item.title}
              onPress={() => router.push(item.route as any)}
            />
          ))}
        </View>

      </ScrollView>

      {/* Log Out Button */}
      <View className="absolute bottom-0 left-0 right-0 p-6 bg-[#FDF3E1]">
        <CustomButton title="Log Out" variant="destructive" />
      </View>
    </SafeAreaView>
  );
}
