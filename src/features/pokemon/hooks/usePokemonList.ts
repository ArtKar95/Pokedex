import { DEFAULT_PAGE_SIZE } from "@/shared/constants";
import showToast from "@/shared/utils/showToast";
import { type InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { getPokemonDetail, getPokemonList } from "../api/pokemon";
import type { IPokemonListRow } from "../types/pokemon";

const QUERY_KEY = "pokemon-list";

const usePokemonList = () =>
  useInfiniteQuery<
    IPokemonListRow[],
    Error,
    InfiniteData<IPokemonListRow[]>,
    string[],
    number
  >({
    queryKey: [QUERY_KEY],
    queryFn: async ({ pageParam }) => {
      const listPage = await getPokemonList(pageParam);
      const details = await Promise.all(
        listPage.results?.map((item) => getPokemonDetail(item.name)),
      );
      return (
        details?.map((detail) => ({
          id: detail.id,
          name: detail.name,
          image: detail.sprites?.front_default ?? "",
          types: detail.types.map((t) => t.type.name),
        })) ?? []
      );
    },
    initialPageParam: 0,
    meta: {
      onError: () => {
        showToast("error", {
          title: "Could not load Pokemon list",
        });
      },
    },
    getNextPageParam: (lastPage, _pages, lastPageParam) =>
      lastPage.length < DEFAULT_PAGE_SIZE
        ? undefined
        : lastPageParam + lastPage.length,
  });

export default usePokemonList;
