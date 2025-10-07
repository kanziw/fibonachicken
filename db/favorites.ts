import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAtom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { chickenMap } from './chickens';
import type { Chicken, ChickenID } from './core';

const KEY = 'FAVORITES_CHICKEN_IDS_V1';
type FavoriteChicken = {
  version: 'v1';
  chickenId: ChickenID;
  createdAtMs: number;
};

const storage = createJSONStorage<FavoriteChicken[]>(() => AsyncStorage);
export const favoriteChickensAtom = atomWithStorage<FavoriteChicken[]>(KEY, [], storage, { getOnInit: true });

export const useFavorites = () => {
  const [favoriteChickens, setFavoriteChickens] = useAtom(favoriteChickensAtom);

  const addChickenFavorite = async (chicken: Chicken) => {
    setFavoriteChickens(async (prev) => {
      const prevFavoriteChickens = await prev;
      if (prevFavoriteChickens.some((favorite) => favorite.chickenId === chicken.id)) {
        return prevFavoriteChickens;
      }

      return [
        {
          version: 'v1',
          chickenId: chicken.id,
          createdAtMs: Date.now(),
        },
        ...prevFavoriteChickens,
      ];
    });
  };

  const removeChickenFavorite = async (chicken: Chicken) => {
    setFavoriteChickens(async (prev) => {
      const prevFavoriteChickens = await prev;
      return prevFavoriteChickens.filter((favorite) => favorite.chickenId !== chicken.id);
    });
  };

  return {
    chickens: favoriteChickens.map((favorite) => chickenMap.get(favorite.chickenId)).filter((chicken): chicken is Chicken => chicken !== undefined),

    addChickenFavorite,
    removeChickenFavorite,
  };
};
