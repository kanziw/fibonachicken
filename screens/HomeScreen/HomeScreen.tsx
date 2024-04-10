import { Text } from '@/components/Text';
import { useTheme } from '@/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from './Header';
import { HorizontalDivider } from './HorizontalDivider';

export const HomeScreen = () => {
  const { deviceHeight, fontSize } = useTheme();

  return (
    <SafeAreaView>
      <Header title="피보나치킨 계산기" style={{ height: deviceHeight * 0.1 }} />
      <HorizontalDivider />
      <Text style={{ fontSize: fontSize.xs }}>extra small</Text>
      <Text style={{ fontSize: fontSize.s }}>small</Text>
      <Text style={{ fontSize: fontSize.m }}>medium</Text>
      <Text style={{ fontSize: fontSize.l }}>large</Text>
      <Text style={{ fontSize: fontSize.xl }}>extra large</Text>
    </SafeAreaView>
  );
};
