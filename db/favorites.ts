import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { allChickens } from './chickens';
import type { Chicken } from './core';

const KEY = 'FAVORITES_CHICKEN_IDS_V1';
type FavoriteChicken = {
  versoin: 'v1';
  chickenId: Chicken['id'];
  createdAtMs: number;
};

export const useFavorites = () => {
  const [favoriteChickens, setFavoriteChickens] = useState<FavoriteChicken[]>([]);
  const [isInitialized, setIsInitialized] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem(KEY);
        if (value === null) {
          return;
        }
        const parsedFavoriteChickens = JSON.parse(value) as FavoriteChicken[];
        parsedFavoriteChickens.sort((a, b) => b.createdAtMs - a.createdAtMs);
        setFavoriteChickens(parsedFavoriteChickens);
      } catch (err) {
        console.error(`initialize favorites error: ${err}`);
      } finally {
        setIsInitialized(false);
      }
    })();
  }, []);

  const favoriteChickenIds = favoriteChickens.map((favorite) => favorite.chickenId);

  const addChickenFavorite = async (chicken: Chicken) => {
    if (favoriteChickenIds.includes(chicken.id)) {
      return;
    }

    try {
      const newFavoriteChickens: FavoriteChicken[] = [
        {
          versoin: 'v1',
          chickenId: chicken.id,
          createdAtMs: Date.now(),
        },
        ...favoriteChickens,
      ];
      await AsyncStorage.setItem(KEY, JSON.stringify(newFavoriteChickens));
      setFavoriteChickens(newFavoriteChickens);
    } catch (err) {
      console.error(`add favorite error: ${err}`);
    }
  };

  const removeChickenFavorite = async (chicken: Chicken) => {
    if (!favoriteChickenIds.includes(chicken.id)) {
      return;
    }

    try {
      const newFavoriteChickens = favoriteChickens.filter((favorite) => favorite.chickenId !== chicken.id);
      await AsyncStorage.setItem(KEY, JSON.stringify(newFavoriteChickens));
      setFavoriteChickens(newFavoriteChickens);
    } catch (err) {
      console.error(`remove favorite error: ${err}`);
    }
  };

  return {
    isInitialized,
    chickens: favoriteChickenIds.map((id) => allChickens.find((chicken) => chicken.id === id)).filter((chicken): chicken is Chicken => chicken !== undefined),

    addChickenFavorite,
    removeChickenFavorite,
  };
};
