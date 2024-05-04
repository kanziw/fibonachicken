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
  const [isLoading, setIsLoading] = useState(true);

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
        console.error(`load favorites error: ${err}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const favoriteChickenIds = favoriteChickens.map((favorite) => favorite.chickenId);

  return {
    isLoading,
    chickens: favoriteChickenIds.map((id) => allChickens.find((chicken) => chicken.id === id)).filter((chicken): chicken is Chicken => chicken !== undefined),
  };
};
