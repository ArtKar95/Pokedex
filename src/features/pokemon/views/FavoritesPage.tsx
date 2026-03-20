import EmptyMessage from "@/shared/components/EmptyMessage";
import ScreenError from "@/shared/components/ScreenError";
import ScreenLoading from "@/shared/components/ScreenLoading";
import { EDGES } from "@/shared/constants";
import useThemeColor from "@/shared/hooks/useThemeColor";
import { FlatList, RefreshControl, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonListCard from "../components/PokemonListCard";
import PokemonListHeader from "../components/PokemonListHeader";
import useFavoritePokemonList from "../hooks/useFavoritePokemonList";
import { useFavorites } from "../hooks/useFavoritesContext";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const refreshTint = useThemeColor("refreshControlTint");
  const { data, isPending, isError, isFetching, refetch } =
    useFavoritePokemonList(favorites);

  const favoritePokemon = data ?? [];

  if (!!favorites.length && !favoritePokemon.length && isPending) {
    return <ScreenLoading text="Loading favorites…" />;
  }

  if (isError && !favoritePokemon.length && !!favorites.length) {
    return (
      <ScreenError
        onRetry={refetch}
        message="Something went wrong while loading favorites."
      />
    );
  }

  return (
    <View className="flex-1 bg-slate-100 dark:bg-slate-950">
      <SafeAreaView className="flex-1" edges={EDGES}>
        <PokemonListHeader
          title="Favorites"
          subtitle="Your favorite Pokémon list."
        />
        <FlatList
          data={favoritePokemon}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
          renderItem={({ item }) => (
            <View className="mb-3 flex-1 min-w-0">
              <PokemonListCard pokemon={item} />
            </View>
          )}
          contentContainerClassName="px-4 pb-8 pt-2"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={() => void refetch()}
              tintColor={refreshTint}
            />
          }
          ListEmptyComponent={
            !favorites.length ? (
              <EmptyMessage message="No favorite Pokémon yet." />
            ) : null
          }
        />
      </SafeAreaView>
    </View>
  );
};

export default FavoritesPage;
