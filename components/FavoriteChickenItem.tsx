import type { Chicken } from '@/db';
import { useTheme } from '@/theme';
import { FontAwesome } from '@expo/vector-icons';
import type { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text } from './Text';

type Props = {
  chicken: Chicken;
  favorited: boolean;
  addChickenFavorite: (chicken: Chicken) => void;
  removeChickenFavorite: (chicken: Chicken) => void;
};

export const FavoriteChickenItem: FC<Props> = ({ chicken, favorited, addChickenFavorite, removeChickenFavorite }) => {
  const { favoritesColor } = useTheme();

  return (
    <Pressable onPress={() => (favorited ? removeChickenFavorite(chicken) : addChickenFavorite(chicken))} style={styles.container}>
      <Text size="l">{chicken.name}</Text>
      <Text>
        <FontAwesome name={favorited ? 'heart' : 'heart-o'} size={24} color={favoritesColor} />
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
