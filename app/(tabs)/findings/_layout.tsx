import { Contacts } from '@/components/Contacts';
import { Stack } from 'expo-router';

export default function FindingLayout() {
  const headerRight = () => <Contacts />;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, title: '찾기' }} />
      <Stack.Screen name="fride" options={{ title: '후라이드', headerRight }} />
      <Stack.Screen name="seasoned" options={{ title: '양념', headerRight }} />
      <Stack.Screen name="boneless" options={{ title: '순살', headerRight }} />
      <Stack.Screen name="grilled" options={{ title: '구운치킨', headerRight }} />
    </Stack>
  );
}
