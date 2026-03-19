import { DEFAULT_PAGE_SIZE } from "@/shared/constants";
import apiRequest from "@/api/client";
import { API_BASE_URL } from "@/api/config";
import type { PokemonDetail, PokemonListResponse } from "../types/pokemon";

export const getPokemonList = (
  offset = 0,
  limit = DEFAULT_PAGE_SIZE,
): Promise<PokemonListResponse> => {
  return apiRequest<PokemonListResponse>(
    `${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
  );
};

export const getPokemonDetail = (
  searchParam: string | number,
): Promise<PokemonDetail> => {
  return apiRequest<PokemonDetail>(`${API_BASE_URL}/pokemon/${searchParam}`);
};
