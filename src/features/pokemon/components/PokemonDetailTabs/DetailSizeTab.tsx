import type { IPokemonDetail } from "@/features/pokemon/types/pokemon";
import { Text, View } from "react-native";

interface IDetailSizeTabProps {
  height: IPokemonDetail["height"];
  weight: IPokemonDetail["weight"];
}

const DetailSizeTab = ({ height, weight }: IDetailSizeTabProps) => (
  <View className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
    <View className="flex-row items-center justify-between gap-4 px-4 py-4">
      <Text className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Height
      </Text>
      <Text className="text-xl font-semibold tabular-nums text-slate-900 dark:text-slate-100">
        {(height / 10).toFixed(1)} m
      </Text>
    </View>
    <View className="h-px bg-slate-200 dark:bg-slate-700" />
    <View className="flex-row items-center justify-between gap-4 px-4 py-4">
      <Text className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Weight
      </Text>
      <Text className="text-xl font-semibold tabular-nums text-slate-900 dark:text-slate-100">
        {(weight / 10).toFixed(1)} kg
      </Text>
    </View>
  </View>
);

export default DetailSizeTab;
