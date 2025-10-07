export const allBrands = [
  {
    id: 'BBQ',
    name: 'BBQ',
    url: 'https://bbq.co.kr/',
  },
  {
    id: 'GOOBNE',
    name: '굽네치킨',
    url: 'https://www.goobne.co.kr/',
  },
  {
    id: 'NORANG',
    name: '노랑통닭',
    url: 'https://www.norangtongdak.co.kr/',
  },
  {
    id: 'SAMDUK',
    name: '삼덕치킨',
    url: 'https://samdukchicken.com/',
  },
] as const;

export type Category = 'Fried' | 'Grilled';
export type Brand = (typeof allBrands)[number];
export type BrandID = (typeof allBrands)[number]['id'];
type Bone = 'Bone' | 'Boneless';
type Seasoned = 'Seasoned' | 'Unseasoned';

export type ChickenID = `${BrandID}-${string}-${Category}-${Bone}-${Seasoned}`;
export type Chicken = {
  id: ChickenID;
  name: string;

  brand: Brand;
  category: Category;

  hasBone: boolean;
  seasoned: boolean;
};
