import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useTheme } from '@/theme';

export default function SeasonsedScreen() {
  const { center } = useTheme();
  return (
    <RootView style={center}>
      <Text>양념</Text>
    </RootView>
  );
}
