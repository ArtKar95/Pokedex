import useThemeColor from "@/shared/hooks/useThemeColor";
import cn from "@/shared/utils/cn";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useFavorites } from "../hooks/useFavoritesContext";
import type { IPokemonListRow } from "../types/pokemon";
import getPokemonBgClass from "../utils/getPokemonBgClass";
import PokemonImage from "./PokemonImage";

interface IPokemonListCardProps {
  pokemon: IPokemonListRow;
}

const PokemonListCard = ({ pokemon }: IPokemonListCardProps) => {
  const router = useRouter();
  const { id, image, name, types } = pokemon;
  const typeBg = getPokemonBgClass(types?.[0]);
  const { favorites, toggle } = useFavorites();
  const iconColor = useThemeColor("icon");
  const favoriteColor = useThemeColor("favorite");
  const isFavorite = favorites.includes(id);

  const openDetail = () => {
    router.push({ pathname: "/pokemon/[id]", params: { id: String(id) } });
  };

  return (
    <View className={cn("w-full rounded-3xl px-3 pb-4 pt-2", typeBg)}>
      <View className="w-full flex-row items-start">
        <Pressable
          className="h-10 min-h-10 min-w-0 flex-1 active:opacity-90"
          onPress={openDetail}
        />
        <Pressable
          className="h-10 w-10 shrink-0 items-center justify-center rounded-full active:opacity-70"
          onPress={() => toggle(id)}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={22}
            color={isFavorite ? favoriteColor : iconColor}
          />
        </Pressable>
      </View>

      <Pressable
        className="w-full items-center active:opacity-90"
        onPress={openDetail}
      >
        <PokemonImage uri={image ?? ""} width={80} height={80} />
        <Text
          className="mt-2 text-center text-base font-bold text-slate-900 dark:text-slate-100"
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text className="mt-1 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
          {String(id).padStart(3, "0")}
        </Text>
      </Pressable>
    </View>
  );
};

export default PokemonListCard;
