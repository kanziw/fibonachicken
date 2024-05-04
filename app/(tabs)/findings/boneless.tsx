import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useTheme } from '@/theme';

export default function BonelessScreen() {
  const { center } = useTheme();
  return (
    <RootView style={center}>
      <Text>순살</Text>
    </RootView>
  );
}
