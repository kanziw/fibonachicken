import { type Chicken, useFavorites } from '@/db';
import { useTheme } from '@/theme';
import { FlashList } from '@shopify/flash-list';
import type { FC } from 'react';
import { StyleSheet } from 'react-native';
import { FavoriteChickenItem } from './FavoriteChickenItem';
import { Text } from './Text';

type Props = {
  chickens: Chicken[];
};

export const ChickenListWithBrandSection: FC<Props> = ({ chickens }) => {
  const { backgroundColor } = useTheme();
  const { chickens: favoriteChickens, addChickenFavorite, removeChickenFavorite } = useFavorites();

  const brandChickenMap: Record<string, Chicken[]> = {};
  for (const chicken of chickens) {
    const header = `• ${chicken.brand.name}`;
    brandChickenMap[header] ??= [];
    brandChickenMap[header].push(chicken);
  }
  const DATA: (string | Chicken)[] = [];
  for (const [brand, chickens] of Object.entries(brandChickenMap)) {
    DATA.push(brand);
    DATA.push(...chickens);
  }

  const stickyHeaderIndices = DATA.map((item, index) => (typeof item === 'string' ? index : null)).filter((item) => item !== null) as number[];

  return (
    <FlashList
      data={DATA}
      renderItem={({ item }) => {
        if (typeof item === 'string') {
          // Rendering header
          return <Text style={[{ backgroundColor }, styles.header]}>{item}</Text>;
        }

        // Render item
        const favorited = favoriteChickens.some((favorite) => favorite.id === item.id);
        return <FavoriteChickenItem key={item.id} chicken={item} favorited={favorited} addChickenFavorite={addChickenFavorite} removeChickenFavorite={removeChickenFavorite} />;
      }}
      stickyHeaderIndices={stickyHeaderIndices}
      getItemType={(item) => (typeof item === 'string' ? 'sectionHeader' : 'row')}
      estimatedItemSize={100}
      ListEmptyComponent={<Text>호오... 아직 내가 모르는 치킨의 세계가 있단 말인가?</Text>}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 6,
  },
});
