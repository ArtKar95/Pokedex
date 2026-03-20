import cn from "@/shared/utils/cn";
import { SafeAreaView } from "react-native-safe-area-context";
import { EDGES } from "../constants";
import Loader from "./Loader";

interface IScreenLoadingProps {
  className?: string;
  text?: string;
}

const ScreenLoading = ({
  className,
  text = "Loading...",
}: IScreenLoadingProps) => (
  <SafeAreaView
    className={cn(
      "flex-1 items-center justify-center bg-slate-100 dark:bg-slate-950",
      className,
    )}
    edges={EDGES}
    style={{ flex: 1 }}
  >
    <Loader text={text} />
  </SafeAreaView>
);

export default ScreenLoading;
