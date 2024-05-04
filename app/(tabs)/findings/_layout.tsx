import { Stack } from 'expo-router';

export default function FindingLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: '찾기',
        }}
      />
      <Stack.Screen name="fride" options={{ title: '후라이드' }} />
      <Stack.Screen name="seasoned" options={{ title: '양념' }} />
      <Stack.Screen name="boneless" options={{ title: '순살' }} />
      <Stack.Screen name="grilled" options={{ title: '구운치킨' }} />
    </Stack>
  );
}
