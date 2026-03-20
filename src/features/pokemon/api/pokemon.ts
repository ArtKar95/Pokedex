import apiRequest from "@/api/client";
import { API_BASE_URL } from "@/api/config";
import { DEFAULT_PAGE_SIZE } from "@/shared/constants";
import type { IPokemonDetail, IPokemonListResponse } from "../types/pokemon";

export const getPokemonList = (
  offset = 0,
  limit = DEFAULT_PAGE_SIZE,
): Promise<IPokemonListResponse> => {
  return apiRequest<IPokemonListResponse>(
    `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );
};

export const getPokemonDetail = (
  searchParam: string | number,
): Promise<IPokemonDetail> => {
  return apiRequest<IPokemonDetail>(`${API_BASE_URL}/pokemon/${searchParam}`);
};
