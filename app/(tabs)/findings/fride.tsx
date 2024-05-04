import { ChickenListWithBrandSection } from '@/components/ChickenListWithBrandSection';
import { RootView } from '@/components/RootView';
import { allChickens } from '@/db';

const friedChickens = allChickens.filter((chicken) => chicken.category === 'Fried' && chicken.hasBone && !chicken.seasoned);

export default function FindingsFrideScreen() {
  return (
    <RootView>
      <ChickenListWithBrandSection chickens={friedChickens} />
    </RootView>
  );
}
