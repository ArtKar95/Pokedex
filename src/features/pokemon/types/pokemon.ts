export interface IPokemonListItem {
  name: string;
  url: string;
}

export interface IPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonListItem[];
}

export type IPokemonListRow = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

interface IStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface IType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface ISprite {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
  other?: {
    home?: { front_default: string };
    "official-artwork"?: { front_default: string };
  };
}

export interface IPokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: IStat[];
  types: IType[];
  sprites: ISprite;
}
