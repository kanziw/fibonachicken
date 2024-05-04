export type Category = 'Fried' | 'Grilled';
export type Brand =
  | 'BBQ' // https://bbq.co.kr/
  | 'SAMDUK'; // https://samdukchicken.com/
type Bone = 'Bone' | 'Boneless';
type Seasoned = 'Seasoned' | 'Unseasoned';

export type Chicken = {
  id: `${Brand}-${string}-${Category}-${Bone}-${Seasoned}`;
  name: string;
  brand: Brand;
  category: Category;

  hasBone: boolean;
  seasoned: boolean;
};
