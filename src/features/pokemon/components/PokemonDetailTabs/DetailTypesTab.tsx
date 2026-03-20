import type { IPokemonDetail } from "@/features/pokemon/types/pokemon";
import getPokemonBgClass from "@/features/pokemon/utils/getPokemonBgClass";
import cn from "@/shared/utils/cn";
import { Text, View } from "react-native";

interface IDetailTypesTabProps {
  types: IPokemonDetail["types"];
}

const DetailTypesTab = ({ types }: IDetailTypesTabProps) => (
  <View className="flex-row flex-wrap gap-2">
    {types?.map(({ type }) => (
      <View
        key={type.name}
        className={cn("rounded-full px-4 py-2", getPokemonBgClass(type.name))}
      >
        <Text className="text-base font-medium capitalize text-slate-900 dark:text-slate-100">
          {type.name}
        </Text>
      </View>
    ))}
  </View>
);

export default DetailTypesTab;
