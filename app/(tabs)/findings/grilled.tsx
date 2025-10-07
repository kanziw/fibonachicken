import { ChickenListWithBrandSection } from '@/components/ChickenListWithBrandSection';
import { RootView } from '@/components/RootView';
import { allChickens } from '@/db';

const grilledChickens = allChickens.filter((chicken) => chicken.category === 'Grilled');

export default function FindingsGrilledScreen() {
  return (
    <RootView>
      <ChickenListWithBrandSection chickens={grilledChickens} />
    </RootView>
  );
}
