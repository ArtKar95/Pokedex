import showToast from "@/shared/utils/showToast";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPokemonList } from "../api/pokemon";

const QUERY_KEY = "pokemon-list";

const usePokemonList = () =>
  useInfiniteQuery({
    queryKey: [QUERY_KEY],
    queryFn: ({ pageParam }) => getPokemonList(pageParam),
    initialPageParam: 0,
    meta: {
      onError: () => {
        showToast("error", {
          title: "Could not load Pokemon list.",
        });
      },
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) {
        return undefined;
      }

      return Number(new URL(lastPage.next).searchParams.get("offset") ?? 0);
    },
  });

export default usePokemonList;
