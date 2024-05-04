import { ChickenListWithBrandSection } from '@/components/ChickenListWithBrandSection';
import { RootView } from '@/components/RootView';
import { allChickens } from '@/db';

const bonelessChickens = allChickens.filter((chicken) => chicken.category === 'Fried' && !chicken.hasBone);

export default function FindingsBonelessScreen() {
  return (
    <RootView>
      <ChickenListWithBrandSection chickens={bonelessChickens} />
    </RootView>
  );
}
