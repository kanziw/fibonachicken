import { type Chicken, useFavorites } from '@/db';
import { useTheme } from '@/theme';
import { FontAwesome } from '@expo/vector-icons';
import type { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text } from './Text';

type Props = {
  chicken: Chicken;
  favorited: boolean;
  withBrandPrefix?: boolean;
};

export const FavoriteChickenItem: FC<Props> = ({ chicken, favorited, withBrandPrefix = false }) => {
  const { favoritesColor } = useTheme();
  const { addChickenFavorite, removeChickenFavorite } = useFavorites();
  console.log('???', withBrandPrefix);
  return (
    <Pressable onPress={() => (favorited ? removeChickenFavorite(chicken) : addChickenFavorite(chicken))} style={styles.container}>
      <Text size="l">
        {withBrandPrefix ? `${chicken.brand.name} - ` : ''}
        {chicken.name}
      </Text>
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
