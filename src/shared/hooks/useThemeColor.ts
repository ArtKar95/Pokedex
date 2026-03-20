import COLORS from "@/shared/colors";
import { useColorScheme } from "react-native";

export type ColorProperty = keyof (typeof COLORS)["light"];

type Palette = (typeof COLORS)["light"];

type UseThemeColorResult<T> = T extends ColorProperty
  ? string
  : T extends readonly ColorProperty[]
    ? { [K in T[number]]: string }
    : never;

const useThemeColor = <
  const T extends ColorProperty | readonly ColorProperty[],
>(
  propertyOrList: T,
): UseThemeColorResult<T> => {
  const scheme = useColorScheme();
  const palette: Palette = COLORS[scheme || "light"];

  if (Array.isArray(propertyOrList)) {
    return Object.fromEntries(
      (propertyOrList as ColorProperty[]).map((key) => [key, palette[key]]),
    ) as UseThemeColorResult<T>;
  }

  return palette[propertyOrList as ColorProperty] as UseThemeColorResult<T>;
};

export default useThemeColor;
