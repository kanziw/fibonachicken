import { Stack } from 'expo-router';

export default function FindingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="seasoned" />
      <Stack.Screen name="boneless" />
      <Stack.Screen name="[brandId]" />
    </Stack>
  );
}
