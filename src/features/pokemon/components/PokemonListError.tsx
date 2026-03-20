import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IPokemonListErrorProps {
  onRetry: () => void;
}

const PokemonListError = ({ onRetry }: IPokemonListErrorProps) => (
  <SafeAreaView className="flex-1 items-center justify-center bg-slate-100 px-6 dark:bg-slate-950">
    <Text className="text-center text-base text-slate-800 dark:text-slate-100">
      Something went wrong while loading the Pokédex.
    </Text>
    <Text
      className="mt-4 text-center text-base font-semibold text-slate-700 dark:text-slate-300"
      onPress={() => void onRetry()}
    >
      Tap to retry
    </Text>
  </SafeAreaView>
);

export default PokemonListError;
