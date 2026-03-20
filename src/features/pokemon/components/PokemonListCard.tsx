import cn from "@/shared/utils/cn";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import type { IPokemonListRow } from "../types/pokemon";
import getPokemonBgClass from "../utils/getPokemonBgClass";
import PokemonImage from "./PokemonImage";

interface IPokemonListCardProps {
  pokemon: IPokemonListRow;
}

const PokemonListCard = ({ pokemon }: IPokemonListCardProps) => {
  const { id, image, name, types } = pokemon || {};
  const typeBg = getPokemonBgClass(types?.[0]);

  return (
    <Link
      href={{ pathname: "/pokemon/[id]", params: { id: String(id) } }}
      asChild
    >
      <Pressable className="active:opacity-90">
        <View className={cn("items-center rounded-3xl px-3 pb-4 pt-5", typeBg)}>
          <PokemonImage uri={image ?? ""} width={120} height={120} />
          <Text
            className="mt-2 text-center text-base font-bold text-slate-900 dark:text-slate-100"
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text className="mt-1 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
            {String(id).padStart(3, "0")}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default PokemonListCard;
