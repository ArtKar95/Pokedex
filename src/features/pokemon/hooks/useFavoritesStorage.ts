import showToast from "@/shared/utils/showToast";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

const FAVORITES_STORAGE_KEY = "favorites";

const useFavoritesStorage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    void (async () => {
      try {
        const raw = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
        if (raw == null) return;

        const data: unknown = JSON.parse(raw);
        if (!Array.isArray(data)) return;

        const next: number[] = [];
        for (const value of data) {
          if (typeof value === "number") next.push(value);
        }
        setFavorites(next);
      } catch {
        showToast("error", { title: "Could not load saved favorites list" });
      }
    })();
  }, []);

  const toggle = useCallback((id: number) => {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((favoriteId) => favoriteId !== id)
        : [...prev, id].sort((a, b) => a - b);
      void AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { favorites, toggle };
};

export default useFavoritesStorage;
