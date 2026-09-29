import { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ScreenHeader } from "../../components/ScreenHeader";
import { ToggleItem } from "../../components/ToggleItem";

export default function NotificationsScreen() {
  const router = useRouter();
  const [newStories, setNewStories] = useState(true);
  const [continueReading, setContinueReading] = useState(true);
  const [communityUpdates, setCommunityUpdates] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#FDF3E1]" edges={['top']}>
      <ScrollView contentContainerClassName="px-6 pt-6 pb-10">
        
        <ScreenHeader 
          title="Notification" 
          subtitle="Choose what StoryWeave can notify you about." 
          showBack 
          onBack={() => router.back()} 
        />

        <View className="border-t border-[#151B2C]/10 mb-6" />

        <ToggleItem 
          title="New stories added"
          subtitle="Weekly digest of new content"
          value={newStories}
          onValueChange={setNewStories}
        />

        <ToggleItem 
          title="Continue reading"
          subtitle="Reminder after 2 days away"
          value={continueReading}
          onValueChange={setContinueReading}
        />

        <ToggleItem 
          title="Special promotions & events"
          subtitle="Weekly digest of new content"
          value={communityUpdates}
          onValueChange={setCommunityUpdates}
        />

      </ScrollView>
    </SafeAreaView>
  );
}
