import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useRouter } from 'expo-router';
import type { FC, PropsWithChildren } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

export default function Tab() {
  return (
    <RootView>
      <View style={styles.description}>
        <Text>내 치킨 찾는 거 도와줌세</Text>
        <Text>자네만 알고 있게나 🤫</Text>
      </View>
      <Card href="/findings/fride">
        <Text>후라이드</Text>
      </Card>
      <Card href="/findings/seasoned">
        <Text>양념</Text>
      </Card>
      <Card href="/findings/boneless">
        <Text>순살</Text>
      </Card>
      <Card href="/findings/grilled">
        <Text>구운치킨</Text>
      </Card>
    </RootView>
  );
}

type Props = {
  href: '/findings/fride' | '/findings/seasoned' | '/findings/boneless' | '/findings/grilled';
};

const Card: FC<PropsWithChildren<Props>> = ({ href, children }) => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push(href)} style={styles.card}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  description: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgray',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});
