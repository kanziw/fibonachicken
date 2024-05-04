import { useTheme } from '@/theme';
import { ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router/stack';

export default function AppLayout() {
  const { navigationTheme } = useTheme();
  return (
    <ThemeProvider value={navigationTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
