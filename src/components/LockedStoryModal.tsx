import { Modal, View, Text, Pressable } from "react-native";
import { CustomButton } from "./CustomButton";

interface LockedStoryModalProps {
  visible: boolean;
  onClose: () => void;
  onUpgrade: () => void;
}

export function LockedStoryModal({ visible, onClose, onUpgrade }: LockedStoryModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-[#151B2C]/40">
        <Pressable 
          className="bg-[#FDF3E1] rounded-t-3xl pt-8 pb-10 px-6 border-t border-[#151B2C]"
          onPress={(e) => e.stopPropagation()}
        >
          <View className="items-center mb-6">
             <View className="w-16 h-16 bg-white rounded-2xl items-center justify-center mb-4 border border-[#151B2C]/10">
               <Text className="text-3xl">👑</Text>
             </View>
             <Text className="text-2xl font-bold text-[#151B2C] mb-2">Premium Story</Text>
             <Text className="text-[#151B2C]/80 text-center px-4 leading-5 mb-6">
               Unlock longer stories, deeper mysteries, and complex branching - no ads.
             </Text>

             <View className="flex-row flex-wrap justify-center mb-8 gap-x-2 gap-y-3 px-2">
               <View className="flex-row items-center bg-[#FDF3E1] border border-[#151B2C]/10 rounded-full px-3 py-1.5">
                 <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
                 <Text className="text-[#151B2C] text-sm font-medium">Full story library - genres</Text>
               </View>
               <View className="flex-row items-center bg-[#FDF3E1] border border-[#151B2C]/10 rounded-full px-3 py-1.5">
                 <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
                 <Text className="text-[#151B2C] text-sm font-medium">No ads, ever</Text>
               </View>
               <View className="flex-row items-center bg-[#FDF3E1] border border-[#151B2C]/10 rounded-full px-3 py-1.5">
                 <View className="w-1.5 h-1.5 rounded-full bg-[#ED6442] mr-2" />
                 <Text className="text-[#151B2C] text-sm font-medium">Unlimited AI stories generation</Text>
               </View>
             </View>
          </View>
          
          <CustomButton 
            title="Unlocked Premium" 
            showArrow 
            onPress={onUpgrade} 
            className="mb-4"
          />
          <CustomButton 
            title="Maybe later" 
            variant="secondary"
            onPress={onClose} 
          />
        </Pressable>
      </View>
    </Modal>
  );
}
