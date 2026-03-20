import type { IPokemonDetail } from "@/features/pokemon/types/pokemon";
import { Text, View } from "react-native";

interface IDetailStatsTabProps {
  stats: IPokemonDetail["stats"];
}

const DetailStatsTab = ({ stats }: IDetailStatsTabProps) => (
  <View>
    {stats?.map(({ base_stat, stat }) => (
      <View key={stat.name} className="mb-4">
        <View className="mb-1 flex-row justify-between">
          <Text className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {stat.name}
          </Text>
          <Text className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            {base_stat}
          </Text>
        </View>
        <View className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <View
            className="h-full rounded-full bg-slate-700 dark:bg-slate-300"
            style={{
              width: `${Math.min(100, Math.round((base_stat / 255) * 100))}%`,
            }}
          />
        </View>
      </View>
    ))}
  </View>
);

export default DetailStatsTab;
