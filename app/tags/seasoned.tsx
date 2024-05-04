import { ChickenListWithBrandSection } from '@/components/ChickenListWithBrandSection';
import { RootView } from '@/components/RootView';
import { allChickens } from '@/db';

const seasonedChickens = allChickens.filter((chicken) => chicken.seasoned);

export default function TagsSeasonedScreen() {
  return (
    <RootView>
      <ChickenListWithBrandSection chickens={seasonedChickens} />
    </RootView>
  );
}
