import { Stack } from "expo-router";

export default function CoreLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FDF3E1" } }} />
  );
}
