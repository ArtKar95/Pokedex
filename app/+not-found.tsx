import ScreenNotice from "@/shared/components/ScreenNotice";
import { useRouter } from "expo-router";

const NotFoundScreen = () => {
  const router = useRouter();

  return (
    <ScreenNotice
      message="This page could not be found."
      actionLabel="Go home page"
      onAction={() => router.replace("/")}
    />
  );
};

export default NotFoundScreen;
