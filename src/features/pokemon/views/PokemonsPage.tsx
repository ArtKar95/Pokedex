import EmptyMessage from "@/shared/components/EmptyMessage";
import Loader from "@/shared/components/Loader";
import useDebouncedSearchInput from "@/shared/hooks/useDebouncedSearchInput";
import { useCallback, useMemo } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonListCard from "../components/PokemonListCard";
import PokemonListError from "../components/PokemonListError";
import PokemonListHeader from "../components/PokemonListHeader";
import PokemonListLoading from "../components/PokemonListLoading";
import usePokemonDetail from "../hooks/usePokemonDetail";
import usePokemonList from "../hooks/usePokemonList";

const PokemonsPage = () => {
  const { searchQuery, setSearchQuery, searchKey, isSearchActive } =
    useDebouncedSearchInput();

  const {
    data,
    isLoading,
    isError,
    isRefetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = usePokemonList();

  const { data: searchDetail, isPending: isSearchPending } = usePokemonDetail(
    isSearchActive ? searchKey : "",
    false,
  );

  const rows = useMemo(() => {
    if (!data?.pages.length) {
      return [];
    }
    return data.pages.flatMap((page) => page);
  }, [data]);

  const searchRow = useMemo(() => {
    if (!searchDetail) {
      return null;
    }
    return {
      id: searchDetail.id,
      name: searchDetail.name,
      image: searchDetail.sprites?.front_default ?? "",
      types: searchDetail.types.map((t) => t.type.name),
    };
  }, [searchDetail]);

  const listData = useMemo(() => {
    if (isSearchActive) {
      return searchRow ? [searchRow] : [];
    }
    return rows;
  }, [isSearchActive, rows, searchRow]);

  const onEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      void fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading && !data) {
    return <PokemonListLoading />;
  }

  if (isError) {
    return <PokemonListError onRetry={refetch} />;
  }

  return (
    <SafeAreaView
      className="flex-1 bg-slate-100 dark:bg-slate-950"
      edges={["top", "left", "right"]}
    >
      <PokemonListHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <FlatList
        data={listData}
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
        onEndReached={isSearchActive ? undefined : onEndReached}
        onEndReachedThreshold={0.35}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={() => void refetch()}
            tintColor="#64748b"
          />
        }
        ListEmptyComponent={
          isSearchActive && !listData.length ? (
            isSearchPending ? (
              <View className="items-center px-4 pt-8">
                <Loader text="Searching…" />
              </View>
            ) : (
              <EmptyMessage message="No Pokémon found matching that name or number." />
            )
          ) : null
        }
        ListFooterComponent={
          !isSearchActive && isFetchingNextPage ? (
            <Loader className="py-6" />
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default PokemonsPage;
