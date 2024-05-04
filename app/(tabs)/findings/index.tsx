import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useTheme } from '@/theme';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

export default function Tab() {
  const { center } = useTheme();
  const router = useRouter();
  return (
    <RootView>
      <Pressable onPress={() => router.push('/findings/fride')} style={[center, { backgroundColor: 'red' }]}>
        <Text>후라이드</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/findings/seasoned')} style={[center, { backgroundColor: 'blue' }]}>
        <Text>양념</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/findings/boneless')} style={[center, { backgroundColor: 'purple' }]}>
        <Text>순살</Text>
      </Pressable>
      <Pressable onPress={() => router.push('/findings/grilled')} style={[center, { backgroundColor: 'skyblue' }]}>
        <Text>구운치킨</Text>
      </Pressable>
    </RootView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
});
