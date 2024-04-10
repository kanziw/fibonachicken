import { Text } from '@/components/Text';
import { useTheme } from '@/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const { center, fontSize } = useTheme();

  return (
    <SafeAreaView style={center}>
      <Text style={{ fontSize: fontSize.xs }}>extra small</Text>
      <Text style={{ fontSize: fontSize.s }}>small</Text>
      <Text style={{ fontSize: fontSize.m }}>medium</Text>
      <Text style={{ fontSize: fontSize.l }}>large</Text>
      <Text style={{ fontSize: fontSize.xl }}>extra large</Text>
    </SafeAreaView>
  );
};
