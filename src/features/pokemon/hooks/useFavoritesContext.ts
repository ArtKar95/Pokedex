import { createContext, use } from "react";

interface IFavoritesContextValue {
  favorites: number[];
  toggle: (id: number) => void;
}

export const FavoritesContext = createContext<IFavoritesContextValue | null>(
  null,
);

export const useFavorites = () => {
  const ctx = use(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites must be used within RootLayout");
  }
  return ctx;
};
