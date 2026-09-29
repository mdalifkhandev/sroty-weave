import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FDF3E1" } }}>
      <Stack.Screen name="adult-content" />
      {/* <Stack.Screen name="mystery-mode" /> */}
    </Stack>
  );
}
