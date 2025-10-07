import { FavoriteChickenItem } from '@/components/FavoriteChickenItem';
import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { useFavorites } from '@/db';
import { useTheme } from '@/theme';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

export default function FavoritesTab() {
  const { center } = useTheme();
  const { chickens, addChickenFavorite, removeChickenFavorite } = useFavorites();
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
            <FavoriteChickenItem chicken={chicken} favorited={true} addChickenFavorite={addChickenFavorite} removeChickenFavorite={removeChickenFavorite} />
            <View style={styles.tagContainer}>
              <Pressable style={styles.tagItem} onPress={() => router.push(`/tags/${chicken.brand.id}`)}>
                <Text size="s">{chicken.brand.name}</Text>
              </Pressable>
              {!chicken.hasBone && (
                <Pressable style={styles.tagItem} onPress={() => router.push('/tags/boneless')}>
                  <Text size="s">순살</Text>
                </Pressable>
              )}
              {chicken.seasoned && (
                <Pressable style={styles.tagItem} onPress={() => router.push('/tags/seasoned')}>
                  <Text size="s">양념</Text>
                </Pressable>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </RootView>
  );
}

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
