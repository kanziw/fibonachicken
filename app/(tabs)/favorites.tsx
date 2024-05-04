import { FavoriteChickenItem } from '@/components/FavoriteChickenItem';
import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { type Brand, useFavorites } from '@/db';
import { useTheme } from '@/theme';
import { useRouter } from 'expo-router';
import type { FC } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

export default function FavoritesTab() {
  const { center } = useTheme();
  const { chickens } = useFavorites();
  const router = useRouter();

  if (!chickens.length) {
    return (
      <Pressable onPress={() => router.push('/findings/')} style={center}>
        <Text>아직 선택하지 못하였군..</Text>
        <Text>내가 도와줌세!</Text>
      </Pressable>
    );
  }
  return (
    <RootView>
      <ScrollView>
        {chickens.map((chicken) => (
          <View key={chicken.id}>
            <FavoriteChickenItem chicken={chicken} favorited={true} />
            <View style={styles.tagContainer}>
              <Tag value={chicken.brand} />
              {!chicken.hasBone && Tag({ value: '순살' })}
              {chicken.seasoned && Tag({ value: '양념' })}
            </View>
          </View>
        ))}
      </ScrollView>
    </RootView>
  );
}

const Tag: FC<{ value: '순살' | '양념' | Brand }> = ({ value }) => {
  const router = useRouter();
  const name = value === '순살' ? '순살' : value === '양념' ? '양념' : value.name;

  return (
    <Pressable
      onPress={() => {
        switch (value) {
          case '순살':
            return router.push('/tags/boneless');
          case '양념':
            return router.push('/tags/seasoned');
          default:
            return router.push(`/tags/${value.id}`);
        }
      }}
      style={styles.tagItem}
    >
      <Text size="s">{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  tagContainer: {
    flexDirection: 'row',
    alignContent: 'space-around',
    paddingLeft: 20,
    columnGap: 6,
  },
  tagItem: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    borderRadius: 4,
    paddingHorizontal: 8,
    height: 30,
    justifyContent: 'center',
  },
});
