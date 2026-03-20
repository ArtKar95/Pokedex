import {
  DEFAULT_POKEMON_TYPE_BG_CLASS,
  POKEMON_TYPE_BG_CLASS,
} from "../constants";

const getPokemonBgClass = (typeName: string | undefined): string => {
  if (!typeName) {
    return DEFAULT_POKEMON_TYPE_BG_CLASS;
  }
  return (
    POKEMON_TYPE_BG_CLASS[typeName.toLowerCase()] ??
    DEFAULT_POKEMON_TYPE_BG_CLASS
  );
};

export default getPokemonBgClass;
