import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function PokemonDetailPlaceholder() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <View className="flex-1 bg-white dark:bg-slate-900">
      <Pressable
        className="px-4 py-3 active:opacity-70"
        onPress={() => router.back()}
        accessibilityRole="button"
        accessibilityLabel="Go back"
      >
        <Text className="text-base font-semibold text-blue-600 dark:text-blue-400">
          ← Back
        </Text>
      </Pressable>
      <View className="flex-1 items-center justify-center p-6">
        <Text className="text-lg text-slate-800 dark:text-slate-100">
          Pokémon #{id}
        </Text>
        <Text className="mt-2 text-center text-slate-500 dark:text-slate-400">
          Detail screen coming next
        </Text>
      </View>
    </View>
  );
}
