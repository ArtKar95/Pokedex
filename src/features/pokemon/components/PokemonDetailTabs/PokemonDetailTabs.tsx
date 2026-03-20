import type { IPokemonDetail } from "@/features/pokemon/types/pokemon";
import cn from "@/shared/utils/cn";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import DetailSizeTab from "./DetailSizeTab";
import DetailStatsTab from "./DetailStatsTab";
import DetailTypesTab from "./DetailTypesTab";
import { DETAIL_TABS_CONFIG, POKEMON_DETAIL_TABS } from "./tabConfig";

interface IPokemonDetailTabsProps {
  data: IPokemonDetail;
}

const PokemonDetailTabs = ({ data }: IPokemonDetailTabsProps) => {
  const { types, stats, height, weight } = data ?? {};
  const [activeTab, setActiveTab] = useState(POKEMON_DETAIL_TABS.TYPES);

  return (
    <>
      <View className="mt-8 flex-row border-b border-slate-200 px-2 dark:border-slate-700">
        {Object.values(DETAIL_TABS_CONFIG).map(({ key, label }) => (
          <Pressable
            key={key}
            className="flex-1 items-center pb-3"
            onPress={() => setActiveTab(key)}
          >
            <Text
              className={cn(
                "text-sm",
                activeTab === key
                  ? "font-bold text-slate-900 dark:text-slate-100"
                  : "font-medium text-slate-400 dark:text-slate-500",
              )}
            >
              {label}
            </Text>
          </Pressable>
        ))}
      </View>

      <View className="px-6 pt-6">
        {activeTab === POKEMON_DETAIL_TABS.TYPES && (
          <DetailTypesTab types={types} />
        )}

        {activeTab === POKEMON_DETAIL_TABS.STATS && (
          <DetailStatsTab stats={stats} />
        )}

        {activeTab === POKEMON_DETAIL_TABS.SIZE && (
          <DetailSizeTab height={height} weight={weight} />
        )}
      </View>
    </>
  );
};

export default PokemonDetailTabs;
