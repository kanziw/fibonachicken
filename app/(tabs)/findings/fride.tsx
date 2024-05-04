import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useTheme } from '@/theme';

export default function FrideScreen() {
  const { center } = useTheme();
  return (
    <RootView style={center}>
      <Text>후라이드</Text>
    </RootView>
  );
}
