import cn from "@/shared/utils/cn";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EDGES } from "../constants";
import useThemeColor from "../hooks/useThemeColor";

interface IScreenErrorProps {
  onRetry: () => void;
  message?: string;
  retryLabel?: string;
  className?: string;
  messageClassName?: string;
  retryClassName?: string;
  onBack?: () => void;
}

const ScreenError = ({
  onRetry,
  message = "Something went wrong.",
  retryLabel = "Tap to retry",
  className,
  messageClassName,
  retryClassName,
  onBack,
}: IScreenErrorProps) => {
  const iconColor = useThemeColor("icon");

  return (
    <SafeAreaView
      className={cn("flex-1 bg-slate-100 dark:bg-slate-950", className)}
      edges={EDGES}
      style={{ flex: 1 }}
    >
      {onBack ? (
        <Pressable className="px-4 pt-2" onPress={onBack}>
          <Ionicons name="chevron-back" size={28} color={iconColor} />
        </Pressable>
      ) : null}
      <View className="flex-1 items-center justify-center px-6">
        <Text
          className={cn(
            "text-center text-base text-slate-800 dark:text-slate-100",
            messageClassName,
          )}
        >
          {message}
        </Text>
        <Pressable className="mt-4" onPress={() => void onRetry()}>
          <Text
            className={cn(
              "text-center text-base font-semibold text-slate-700 dark:text-slate-300",
              retryClassName,
            )}
          >
            {retryLabel}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ScreenError;
