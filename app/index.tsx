import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100 px-6 dark:bg-slate-950">
      <View className="absolute right-8 top-28 h-40 w-40 rounded-full bg-red-500/10 dark:bg-red-500/10" />
      <View className="absolute bottom-24 left-4 h-56 w-56 rounded-full bg-sky-400/10 dark:bg-red-400/5" />

      <View className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-white/10 dark:bg-slate-900">
        <Text className="text-center text-3xl font-bold text-slate-900 dark:text-white">
          Pokedex
        </Text>
        <Text className="mt-3 text-center text-base leading-6 text-slate-600 dark:text-slate-300">
          This screen now follows your phone theme automatically with Uniwind
          light and dark styles.
        </Text>

        <View className="mt-6 flex-row gap-3">
          <View className="flex-1 rounded-2xl bg-slate-100 px-4 py-4 dark:bg-slate-800">
            <Text className="text-center text-2xl font-extrabold text-slate-900 dark:text-white">
              151
            </Text>
            <Text className="mt-1 text-center text-xs text-slate-500 dark:text-slate-400">
              Kanto
            </Text>
          </View>

          <View className="flex-1 rounded-2xl bg-slate-100 px-4 py-4 dark:bg-slate-800">
            <Text className="text-center text-2xl font-extrabold text-slate-900 dark:text-white">
              025
            </Text>
            <Text className="mt-1 text-center text-xs text-slate-500 dark:text-slate-400">
              Favorite
            </Text>
          </View>
        </View>

        <View className="mt-6 self-center rounded-full bg-red-500 px-5 py-3">
          <Text className="text-sm font-semibold uppercase tracking-widest text-white">
            System Theme
          </Text>
        </View>
      </View>
    </View>
  );
}
