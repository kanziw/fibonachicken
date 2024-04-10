import { HomeScreen } from '@/screens/HomeScreen';
import { useTheme } from '@/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const { backgroundColor } = useTheme();

  return (
    <SafeAreaProvider style={{ backgroundColor }}>
      <HomeScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
