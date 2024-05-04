import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { allChickens } from './chickens';
import type { Chicken, ChickenID } from './core';

const KEY = 'FAVORITES_CHICKEN_IDS_V1';
type FavoriteChicken = {
  version: 'v1';
  chickenId: ChickenID;
  createdAtMs: number;
};

const favoriteChickensAtom = atomWithStorage<FavoriteChicken[]>(
  KEY,
  [],
  {
    async getItem(key, initialValue) {
      try {
        const value = await AsyncStorage.getItem(key);
        return JSON.parse(value ?? '[]') as FavoriteChicken[];
      } catch {
        return initialValue;
      }
    },
    async setItem(key, newValue) {
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
    },
    async removeItem(key) {
      await AsyncStorage.removeItem(key);
    },
  },
  { getOnInit: true },
);

export const useFavorites = () => {
  const [favoriteChickens, setFavoriteChickens] = useAtom(favoriteChickensAtom);
  const favoriteChickenIds = favoriteChickens.map((favoriteChicken) => favoriteChicken.chickenId);

  const addChickenFavorite = async (chicken: Chicken) => {
    if (favoriteChickenIds.includes(chicken.id)) {
      return;
    }

    const newFavoriteChickens: FavoriteChicken[] = [
      {
        version: 'v1',
        chickenId: chicken.id,
        createdAtMs: Date.now(),
      },
      ...favoriteChickens,
    ];
    setFavoriteChickens(newFavoriteChickens);
  };

  const removeChickenFavorite = async (chicken: Chicken) => {
    if (!favoriteChickenIds.includes(chicken.id)) {
      return;
    }

    setFavoriteChickens(favoriteChickens.filter((favorite) => favorite.chickenId !== chicken.id));
  };

  return {
    chickens: favoriteChickenIds.map((id) => allChickens.find((chicken) => chicken.id === id)).filter((chicken): chicken is Chicken => chicken !== undefined),

    addChickenFavorite,
    removeChickenFavorite,
  };
};
