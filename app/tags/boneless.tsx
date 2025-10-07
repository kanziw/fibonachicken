import { ChickenListWithBrandSection } from '@/components/ChickenListWithBrandSection';
import { RootView } from '@/components/RootView';
import { allChickens } from '@/db';

const bonelessChickens = allChickens.filter((chicken) => !chicken.hasBone);

export default function TagsBonelessScreen() {
  return (
    <RootView>
      <ChickenListWithBrandSection chickens={bonelessChickens} />
    </RootView>
  );
}
