import showToast from "@/shared/utils/showToast";
import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "../api/pokemon";

const QUERY_KEY = "pokemon-detail";

const usePokemonDetail = (searchParam: string) =>
  useQuery({
    queryKey: [QUERY_KEY, searchParam],
    queryFn: () => getPokemonDetail(searchParam),
    enabled: !!searchParam.length,
    meta: {
      onError: () => {
        showToast("error", {
          title: "Could not load Pokemon details",
        });
      },
    },
  });

export default usePokemonDetail;
