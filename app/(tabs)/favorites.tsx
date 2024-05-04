import { FavoriteChickenItem } from '@/components/FavoriteChickenItem';
import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useFavorites } from '@/db';
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
              <Tag name={chicken.brand.name} />
              {!chicken.hasBone && Tag({ name: '순살' })}
              {chicken.seasoned && Tag({ name: '양념' })}
            </View>
          </View>
        ))}
      </ScrollView>
    </RootView>
  );
}

const Tag: FC<{ name: string }> = ({ name }) => (
  <View style={styles.tagItem}>
    <Text size="s">{name}</Text>
  </View>
);

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
