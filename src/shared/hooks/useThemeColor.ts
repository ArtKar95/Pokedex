import COLORS from "@/shared/colors";
import { useColorScheme } from "react-native";

type ColorProperty = keyof (typeof COLORS)["light"];

const useThemeColor = <K extends ColorProperty>(property: K) => {
  const scheme = useColorScheme();
  const paletteKey = scheme === "dark" ? "dark" : "light";
  return COLORS[paletteKey][property];
};

export default useThemeColor;
