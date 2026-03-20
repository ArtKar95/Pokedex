import cn from "@/shared/utils/cn";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, useColorScheme, View } from "react-native";
import type { Edge } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

interface IScreenErrorProps {
  onRetry: () => void;
  message?: string;
  retryLabel?: string;
  className?: string;
  messageClassName?: string;
  retryClassName?: string;
  edges?: readonly Edge[];
  onBack?: () => void;
}

const ScreenError = ({
  onRetry,
  message = "Something went wrong.",
  retryLabel = "Tap to retry",
  className,
  messageClassName,
  retryClassName,
  edges,
  onBack,
}: IScreenErrorProps) => {
  const scheme = useColorScheme();
  const iconColor = scheme === "dark" ? "#f1f5f9" : "#0f172a";

  return (
    <SafeAreaView
      className={cn(
        "flex-1 bg-slate-100 dark:bg-slate-950",
        className,
      )}
      edges={edges}
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
