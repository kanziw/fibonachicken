import type { Brand, Category, Chicken } from '../types';

const makeChicken = (brand: Brand, category: Category, id: string, name: string, { hasBone, seasoned }: { hasBone: boolean; seasoned: boolean }): Chicken => ({
  id: `${brand}-${id}-${category}-${hasBone ? 'Bone' : 'Boneless'}-${seasoned ? 'Seasoned' : 'Unseasoned'}`,
  name,
  brand,
  category,
  hasBone,
  seasoned,
});
const BBQFried = (id: string, name: string): Chicken => makeChicken('BBQ', 'Fried', id, name, { hasBone: true, seasoned: false });
const SamdukBoneless = (id: string, name: string, seasoned: boolean): Chicken => makeChicken('SAMDUK', 'Fried', id, name, { hasBone: false, seasoned });

export const allChickens: Chicken[] = [
  BBQFried('goldenolive', '황금올리브'),
  BBQFried('goldenolive-combo', '황금올리브 콤보'),
  SamdukBoneless('samduck', '삼덕치킨', false),
  SamdukBoneless('sammi', '삼미치킨', true),
];
export const chickenMap = new Map(allChickens.map((chicken) => [chicken.id, chicken]));

if (Array.from(chickenMap.values()).length !== allChickens.length) {
  throw new Error('Duplicate chicken ID');
}
