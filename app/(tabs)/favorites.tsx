import { RootView } from '@/components/RootView';
import { Text } from '@/components/Text';
import { type Chicken, useFavorites } from '@/db';
import { useTheme } from '@/theme';
import { useRouter } from 'expo-router';
import type { FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

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
      {chickens.map((chicken) => (
        <FavoriteChicken key={chicken.id} chicken={chicken} />
      ))}
    </RootView>
  );
}

const FavoriteChicken: FC<{ chicken: Chicken }> = ({ chicken }) => {
  return (
    <View>
      <Text>{chicken.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
