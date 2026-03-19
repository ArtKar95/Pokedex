export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  next: string | null;
  results: PokemonListItem[];
};

export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
};
