import useThemeColor from "@/shared/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

interface IPokemonListHeaderProps {
  searchQuery?: string;
  onSearchChange?: (text: string) => void;
  title?: string;
  subtitle?: string;
}

const PokemonListHeader = ({
  searchQuery = "",
  onSearchChange,
  title = "Pokédex",
  subtitle = "Search for a Pokémon by name or using its National Pokédex number.",
}: IPokemonListHeaderProps) => {
  const iconColor = useThemeColor("icon");
  const placeholderColor = useThemeColor("inputPlaceholder");

  return (
    <View className="px-4 pb-2 pt-1">
      <Text className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </Text>
      <Text className="mt-2 text-sm leading-5 text-slate-500 dark:text-slate-400">
        {subtitle}
      </Text>
      {!!onSearchChange && (
        <View className="mt-4 flex-row items-center rounded-2xl bg-slate-200/90 px-3 py-2.5 dark:bg-slate-800/90">
          <Ionicons name="search" size={20} color={iconColor} />
          <TextInput
            className="ml-2 min-h-0 flex-1 border-0 bg-transparent py-0.5 text-base text-slate-900 outline-none dark:text-slate-100"
            placeholder="Name or number"
            placeholderTextColor={placeholderColor}
            value={searchQuery}
            onChangeText={onSearchChange}
            autoCorrect={false}
            autoCapitalize="none"
            clearButtonMode="while-editing"
            underlineColorAndroid="transparent"
          />
        </View>
      )}
    </View>
  );
};

export default PokemonListHeader;
