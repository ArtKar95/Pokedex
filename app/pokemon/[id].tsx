import PokemonDetailPage from "@/features/pokemon/views/PokemonDetailPage";
import { useLocalSearchParams } from "expo-router";

export default function PokemonDetailRoute() {
  const params = useLocalSearchParams<{ id: string }>();

  return <PokemonDetailPage id={params?.id} />;
}
