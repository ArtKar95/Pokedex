import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IScreenNoticeProps {
  message: string;
  actionLabel: string;
  onAction: () => void;
}

const ScreenNotice = ({
  message,
  actionLabel,
  onAction,
}: IScreenNoticeProps) => (
  <SafeAreaView
    className="flex-1 bg-white dark:bg-slate-900"
    edges={["top", "left", "right"]}
    style={{ flex: 1 }}
  >
    <View className="flex-1 items-center justify-center px-6">
      <Text className="text-center text-base text-slate-600 dark:text-slate-400">
        {message}
      </Text>
      <Pressable className="mt-4 items-center" onPress={() => void onAction()}>
        <Text className="text-center text-base font-semibold text-slate-900 dark:text-slate-100">
          {actionLabel}
        </Text>
      </Pressable>
    </View>
  </SafeAreaView>
);

export default ScreenNotice;
