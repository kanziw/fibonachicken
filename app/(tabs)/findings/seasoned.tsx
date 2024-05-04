import { ChickenListWithBrandSection } from '@/components/ChickenListWithBrandSection';
import { RootView } from '@/components/RootView';
import { allChickens } from '@/db';

const seasonedChickens = allChickens.filter((chicken) => chicken.category === 'Fried' && chicken.hasBone && chicken.seasoned);

export default function SeasonedScreen() {
  return (
    <RootView>
      <ChickenListWithBrandSection chickens={seasonedChickens} />
    </RootView>
  );
}
