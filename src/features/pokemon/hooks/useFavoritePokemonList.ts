import showToast from "@/shared/utils/showToast";
import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "../api/pokemon";
import type { IPokemonListRow } from "../types/pokemon";

const QUERY_KEY = "favorite-pokemon-list";

const useFavoritePokemonList = (favoriteIds: number[]) =>
  useQuery({
    queryKey: [QUERY_KEY, favoriteIds],
    enabled: !!favoriteIds.length,
    queryFn: async (): Promise<IPokemonListRow[]> => {
      const details = await Promise.all(
        favoriteIds.map((id) => getPokemonDetail(id)),
      );

      return details.map((detail) => ({
        id: detail.id,
        name: detail.name,
        image:
          detail.sprites?.other?.home?.front_default ||
          detail.sprites?.front_default ||
          "",
        types: detail.types.map((t) => t.type.name),
      }));
    },
    retry: 1,
    meta: {
      onError: () => {
        showToast("error", {
          title: "Could not load favorites list",
        });
      },
    },
  });

export default useFavoritePokemonList;
