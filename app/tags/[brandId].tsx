import { ChickenListWithBrandSection } from '@/components/ChickenListWithBrandSection';
import { RootView } from '@/components/RootView';
import { type BrandID, allChickens } from '@/db';
import { useLocalSearchParams } from 'expo-router';

export default function TagsBrandScreen() {
  const { brandId } = useLocalSearchParams<{ brandId: BrandID }>();

  return (
    <RootView>
      <ChickenListWithBrandSection chickens={allChickens.filter((chicken) => chicken.brand.id === brandId)} />
    </RootView>
  );
}
