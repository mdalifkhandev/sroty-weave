import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarStyle: { 
        backgroundColor: '#FDF3E1', 
        borderTopColor: 'rgba(21, 27, 44, 0.1)', 
        borderTopWidth: 1,
        height: 65,
        paddingBottom: 10,
        paddingTop: 10
      },
      tabBarActiveTintColor: '#ED6442',
      tabBarInactiveTintColor: '#151B2C',
      sceneStyle: { backgroundColor: '#FDF3E1' }
    }}>
      <Tabs.Screen 
        name="index" 
        options={{ title: "Home", tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} /> }} 
      />
      <Tabs.Screen 
        name="library" 
        options={{ title: "Library", tabBarIcon: ({ color }) => <Feather name="book" size={24} color={color} /> }} 
      />
      <Tabs.Screen 
        name="create" 
        options={{ title: "Create", tabBarIcon: ({ color }) => <Feather name="plus-circle" size={24} color={color} /> }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ title: "Profile", tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} /> }} 
      />
    </Tabs>
  );
}
