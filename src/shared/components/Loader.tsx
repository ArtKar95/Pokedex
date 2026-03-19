import cn from "@/shared/utils/cn";
import { ActivityIndicator, Text, View } from "react-native";

interface ILoaderProps {
  className?: string;
  text?: string;
  textClassName?: string;
  size?: "small" | "large";
}

const Loader = ({
  className,
  text,
  textClassName,
  size = "large",
}: ILoaderProps) => (
  <View
    className={cn(
      "items-center justify-center",
      text ? "gap-3" : undefined,
      className,
    )}
  >
    <ActivityIndicator
      size={size}
      className="text-slate-500 dark:text-slate-400"
    />
    {text ? (
      <Text
        className={cn(
          "text-center text-sm text-slate-500 dark:text-slate-400",
          textClassName,
        )}
      >
        {text}
      </Text>
    ) : null}
  </View>
);

export default Loader;
