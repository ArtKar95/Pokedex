import useThemeColor from "@/shared/hooks/useThemeColor";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

interface IPokemonDetailHeaderProps {
  title: string;
  formattedId: string;
  isFavorite: boolean;
  onBack: () => void;
  onToggleFavorite: () => void;
}

const PokemonDetailHeader = ({
  title,
  formattedId,
  isFavorite,
  onBack,
  onToggleFavorite,
}: IPokemonDetailHeaderProps) => {
  const iconColor = useThemeColor("icon");
  const favoriteColor = useThemeColor("favorite");

  return (
    <View className="flex-row items-center py-3">
      <Pressable
        className="h-11 w-11 items-center justify-center"
        onPress={onBack}
        accessibilityRole="button"
        accessibilityLabel="Close"
      >
        <Ionicons name="chevron-back" size={28} color={iconColor} />
      </Pressable>
      <View className="flex-1 items-center px-12" pointerEvents="box-none">
        <Text className="text-center text-3xl font-bold text-slate-900 dark:text-slate-100">
          {title}
        </Text>
        <Text className="mt-1 text-center text-base text-slate-500 dark:text-slate-400">
          {formattedId}
        </Text>
      </View>
      <Pressable
        className="h-11 w-11 items-center justify-center"
        onPress={onToggleFavorite}
        accessibilityRole="button"
        accessibilityLabel={
          isFavorite ? "Remove from favorites" : "Add to favorites"
        }
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={26}
          color={isFavorite ? favoriteColor : iconColor}
        />
      </Pressable>
    </View>
  );
};

export default PokemonDetailHeader;
