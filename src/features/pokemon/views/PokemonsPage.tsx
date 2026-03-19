import { Text, View } from "react-native";
import usePokemonDetail from "../hooks/usePokemonDetail";
import usePokemonList from "../hooks/usePokemonList";

const PokemonsPage = () => {
  const { data } = usePokemonList();
  console.log("data", data);
  const { data: pokemonDetails } = usePokemonDetail("");
  console.log("pokemonDetails", pokemonDetails);

  return (
    <View className="bg-white dark:bg-slate-600">
      <Text className="text-3xl font-bold text-slate-900 dark:text-white">
        Pokédex
      </Text>
    </View>
  );
};

export default PokemonsPage;
