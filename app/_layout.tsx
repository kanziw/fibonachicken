import { useTheme } from '@/theme';
import { Stack } from 'expo-router/stack';

export default function AppLayout() {
  const { navigationHeaderStyle } = useTheme();
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          ...navigationHeaderStyle,
        }}
      />
    </Stack>
  );
}
