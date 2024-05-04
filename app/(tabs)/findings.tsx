import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useTheme } from '@/theme';

export default function Tab() {
  const { center } = useTheme();
  return (
    <RootView style={center}>
      <Text>Tab Settings</Text>
    </RootView>
  );
}
