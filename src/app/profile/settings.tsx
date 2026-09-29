import { useRouter } from "expo-router";
import { ArrowRight, Check } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View, Modal, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileMenuItem } from "../../components/ProfileMenuItem";
import { ScreenHeader } from "../../components/ScreenHeader";
import { useState } from "react";

export default function SettingsScreen() {
  const router = useRouter();

  const [selectedSection, setSelectedSection] = useState("Stories for Adults");
  const [selectedTextSize, setSelectedTextSize] = useState("Medium");

  const [modalVisible, setModalVisible] = useState(false);
  const [modalConfig, setModalConfig] = useState({ title: "", options: [] as string[], selectedValue: "", onSelect: (val: string) => {} });

  const openSectionModal = () => {
    setModalConfig({
      title: "Select Default Section",
      options: ["Stories for Adults", "Stories for Kids"],
      selectedValue: selectedSection,
      onSelect: (val) => { setSelectedSection(val); setModalVisible(false); }
    });
    setModalVisible(true);
  };

  const openTextSizeModal = () => {
    setModalConfig({
      title: "Select Text Size",
      options: ["Small", "Medium", "Large"],
      selectedValue: selectedTextSize,
      onSelect: (val) => { setSelectedTextSize(val); setModalVisible(false); }
    });
    setModalVisible(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-10">

        {/* Header */}
        <ScreenHeader title="Settings" showBack onBack={() => router.back()} />

        {/* Text size */}
        <Text className="text-lg font-bold text-[#151B2C] mb-4">Text size</Text>
        <TouchableOpacity 
          activeOpacity={0.7}
          onPress={openSectionModal}
          className="border border-[#151B2C] rounded-2xl px-5 py-3 mb-4 bg-[#FDF3E1] flex-row justify-between items-center"
        >
          <View>
            <Text className="text-base font-semibold text-[#151B2C]">Default section</Text>
            <Text className="text-[#151B2C]/70 text-sm">{selectedSection}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-[#151B2C] font-medium mr-1">Change</Text>
            <ArrowRight size={16} color="#151B2C" />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          activeOpacity={0.7}
          onPress={openTextSizeModal}
          className="border border-[#151B2C] rounded-2xl px-5 py-3 mb-8 bg-[#FDF3E1] flex-row justify-between items-center"
        >
          <View>
            <Text className="text-base font-semibold text-[#151B2C]">Text size</Text>
            <Text className="text-[#151B2C]/70 text-sm">{selectedTextSize}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-[#151B2C] font-medium mr-1">Change</Text>
            <ArrowRight size={16} color="#151B2C" />
          </View>
        </TouchableOpacity>

        {/* Notification */}
        <Text className="text-lg font-bold text-[#151B2C] mb-4 mt-4">Notification</Text>
        <ProfileMenuItem
          label="Notification preferences"
          onPress={() => router.push("/profile/notifications" as any)}
        />

        {/* Account */}
        <Text className="text-lg font-bold text-[#151B2C] mb-4 mt-4">Account</Text>
        <View className="mb-10">
          <ProfileMenuItem
            label="Account & password"
            onPress={() => router.push("/profile/account" as any)}
          />
          <ProfileMenuItem
            label="Privacy Policy"
            onPress={() => router.push("/profile/privacy" as any)}
          />
          <ProfileMenuItem
            label="Terms of service"
            onPress={() => router.push("/profile/terms" as any)}
          />
        </View>

      </ScrollView>

      {/* Selection Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable 
          className="flex-1 bg-[#151B2C]/40 justify-end"
          onPress={() => setModalVisible(false)}
        >
          <Pressable 
            className="bg-[#FDF3E1] rounded-t-3xl pt-6 pb-10 px-6 border-t border-[#151B2C]"
            onPress={(e) => e.stopPropagation()}
          >
            <View className="items-center mb-6">
              <View className="w-12 h-1.5 bg-[#151B2C]/20 rounded-full mb-4" />
              <Text className="text-xl font-bold text-[#151B2C]">{modalConfig.title}</Text>
            </View>

            {modalConfig.options.map((option, index) => {
              const isSelected = option === modalConfig.selectedValue;
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.7}
                  onPress={() => modalConfig.onSelect(option)}
                  className={`flex-row items-center justify-between p-4 mb-3 rounded-2xl border ${isSelected ? 'border-[#ED6442] bg-[#ED6442]/10' : 'border-[#151B2C]/20 bg-white'}`}
                >
                  <Text className={`text-base font-semibold ${isSelected ? 'text-[#ED6442]' : 'text-[#151B2C]'}`}>
                    {option}
                  </Text>
                  {isSelected && (
                    <View className="w-6 h-6 rounded-full bg-[#ED6442] items-center justify-center">
                      <Check size={14} color="white" />
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}
