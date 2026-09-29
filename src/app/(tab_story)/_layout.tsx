import { Tabs } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function CustomTabBar({ state, descriptors, navigation }: any) {
  const insets = useSafeAreaInsets();
  
  // Hide tab bar on specific screens
  const currentRoute = state.routes[state.index].name;
  if (currentRoute === "ending") return null;
  
  return (
    <View 
      className="absolute left-6 right-6 flex-row border border-[#ED6442] bg-[#FDF3E1] rounded-full p-1"
      style={{ bottom: insets.bottom + 16 }}
    >
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        
        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName = "";
        let label = "";
        if (route.name === "index") { iconName = "book-open"; label = "Story"; }
        else if (route.name === "evidence") { iconName = "search"; label = "Evidence"; }
        else if (route.name === "path") { iconName = "home"; label = "Path"; }

        if (['index', 'evidence', 'path'].includes(route.name)) {
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              className={`flex-1 flex-row items-center justify-center py-3 rounded-full ${isFocused ? 'bg-[#ED6442]' : 'bg-[#FDF3E1]'}`}
            >
              <Feather name={iconName as any} size={20} color={isFocused ? 'white' : '#A1A1AA'} />
              {isFocused && (
                <Text className="text-white font-semibold ml-2">{label}</Text>
              )}
            </TouchableOpacity>
          );
        }
        return null;
      })}
    </View>
  );
}

export default function TabStoryLayout() {
  return (
    <Tabs 
      // tabBar={(props) => <CustomTabBar {...props} />} 
      screenOptions={{ 
        headerShown: false, 
        sceneStyle: { backgroundColor: "#FDF3E1" },
        tabBarStyle: { display: "none" }
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="evidence" />
      <Tabs.Screen name="path" />
      <Tabs.Screen name="ending" options={{ href: null }} />
    </Tabs>
  );
}
