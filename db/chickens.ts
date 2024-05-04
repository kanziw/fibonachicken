import { type BrandID, type Category, type Chicken, allBrands } from './core';

const makeChicken = (brandId: BrandID, category: Category, id: string, name: string, { hasBone, seasoned }: { hasBone: boolean; seasoned: boolean }): Chicken => {
  const brand = allBrands.find((brand) => brand.id === brandId);
  if (!brand) {
    throw new Error(`Brand not found: ${brandId}`);
  }
  return {
    id: `${brandId}-${id}-${category}-${hasBone ? 'Bone' : 'Boneless'}-${seasoned ? 'Seasoned' : 'Unseasoned'}`,
    name,
    brand,
    category,
    hasBone,
    seasoned,
  };
};
const BBQFried = (id: string, name: string, seasoned: boolean): Chicken => makeChicken('BBQ', 'Fried', id, name, { hasBone: true, seasoned });
const SamdukBoneless = (id: string, name: string, seasoned: boolean): Chicken => makeChicken('SAMDUK', 'Fried', id, name, { hasBone: false, seasoned });
const Goobne = (id: string, name: string): Chicken => makeChicken('GOOBNE', 'Grilled', id, name, { hasBone: true, seasoned: false });
const Norang = (id: string, name: string): Chicken => makeChicken('NORANG', 'Fried', id, name, { hasBone: false, seasoned: true });

export const allChickens: Chicken[] = [
  BBQFried('goldenolive', '황금올리브', false),
  BBQFried('goldenolive-combo', '황금올리브 콤보', false),
  BBQFried('seasoned', '양념치킨', true),
  SamdukBoneless('samduck', '삼덕치킨', false),
  SamdukBoneless('sammi', '삼미치킨', true),
  Goobne('original', '오리지널'),
  Norang('galic', '알싸한 마늘 치킨'),
];
export const chickenMap = new Map(allChickens.map((chicken) => [chicken.id, chicken]));

if (Array.from(chickenMap.values()).length !== allChickens.length) {
  throw new Error('Duplicate chicken ID');
}
