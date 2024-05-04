import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useTheme } from '@/theme';

export default function GrilledScreen() {
  const { center } = useTheme();
  return (
    <RootView style={center}>
      <Text>구운치킨</Text>
    </RootView>
  );
}
