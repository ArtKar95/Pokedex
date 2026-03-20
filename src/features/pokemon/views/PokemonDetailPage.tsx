import ScreenError from "@/shared/components/ScreenError";
import ScreenLoading from "@/shared/components/ScreenLoading";
import cn from "@/shared/utils/cn";
import { useRouter } from "expo-router";
import { ScrollView, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonDetailHeader from "../components/PokemonDetailHeader";
import PokemonDetailTabs from "../components/PokemonDetailTabs/PokemonDetailTabs";
import PokemonImage from "../components/PokemonImage";
import ScreenNotice from "../components/ScreenNotice";
import usePokemonDetail from "../hooks/usePokemonDetail";
import getPokemonBgClass from "../utils/getPokemonBgClass";

const PokemonDetailPage = ({ id }: { id: string }) => {
  const router = useRouter();
  const scheme = useColorScheme();
  const iconColor = scheme === "dark" ? "#f1f5f9" : "#0f172a";
  const { data, isPending, isError, refetch } = usePokemonDetail(id);

  if (!id) {
    return (
      <ScreenNotice
        message="Missing Pokémon id."
        actionLabel="Go back"
        onAction={() => router.back()}
      />
    );
  }

  if (isPending) {
    return <ScreenLoading className="bg-white dark:bg-slate-900" />;
  }

  if (isError || !data) {
    return (
      <ScreenError
        onRetry={refetch}
        message="Could not load this Pokémon."
        retryLabel="Retry"
        className="bg-white dark:bg-slate-900"
        messageClassName="text-slate-600 dark:text-slate-400"
        retryClassName="text-slate-900 dark:text-slate-100"
        edges={["top", "left", "right"]}
        onBack={() => router.back()}
      />
    );
  }

  const uri =
    data.sprites?.other?.home?.front_default ||
    data.sprites?.front_default ||
    "";
  const imageBgClass = getPokemonBgClass(data.types?.[0]?.type?.name);

  return (
    <View className="bg-white dark:bg-slate-900" style={{ flex: 1 }}>
      <SafeAreaView
        className="bg-white dark:bg-slate-900"
        edges={["top", "left", "right"]}
        style={{ flex: 1 }}
      >
        <PokemonDetailHeader
          title={data?.name}
          formattedId={String(data.id).padStart(3, "0")}
          iconColor={iconColor}
          onBack={() => router.back()}
        />

        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerClassName="pb-8"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="mt-4 items-center px-6">
            <View
              className={cn(
                "w-full items-center justify-center overflow-hidden rounded-3xl",
                imageBgClass,
              )}
              style={{
                width: "100%",
                maxWidth: 320,
                aspectRatio: 1,
                alignSelf: "center",
              }}
            >
              <PokemonImage uri={uri} width={250} height={250} />
            </View>
          </View>

          <PokemonDetailTabs data={data} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default PokemonDetailPage;
