import { SafeAreaView } from "react-native-safe-area-context";
import Loader from "@/shared/components/Loader";

const PokemonListLoading = () => (
  <SafeAreaView className="flex-1 items-center justify-center bg-slate-100 dark:bg-slate-950">
    <Loader text="Loading Pokémon…" />
  </SafeAreaView>
);

export default PokemonListLoading;
