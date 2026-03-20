import cn from "@/shared/utils/cn";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import useThemeColor from "../hooks/useThemeColor";

interface IEmptyMessageProps {
  message: string;
  className?: string;
  textClassName?: string;
}

const EmptyMessage = ({
  message,
  className,
  textClassName,
}: IEmptyMessageProps) => {
  const iconColor = useThemeColor("icon");

  return (
    <View className={cn("items-center gap-3 px-4 pt-6", className)}>
      <View className="opacity-90">
        <Ionicons
          name="search-outline"
          size={36}
          style={{ color: iconColor }}
        />
      </View>
      <Text
        className={cn(
          "text-center text-base text-slate-700 dark:text-slate-400",
          textClassName,
        )}
      >
        {message}
      </Text>
    </View>
  );
};

export default EmptyMessage;
