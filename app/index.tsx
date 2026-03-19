import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-950 px-6">
      <View className="w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
        <Text className="text-center text-3xl font-bold text-white">
          Pokedex
        </Text>
        <Text className="mt-3 text-center text-base leading-6 text-slate-300">
          Beautiful styling with Uniwind is now active in `app/index.tsx`.
        </Text>
        <View className="mt-6 self-center rounded-full bg-red-500 px-4 py-2">
          <Text className="text-sm font-semibold uppercase tracking-widest text-white">
            Tailwind styles
          </Text>
        </View>
      </View>
    </View>
  );
}
