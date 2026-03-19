import Toast, { ToastType } from "react-native-toast-message";

type ShowToastOptions = {
  title: string;
  message?: string;
};

const showToast = (
  type: ToastType,
  { title, message }: ShowToastOptions,
): void => {
  Toast.show({
    type,
    text1: title,
    text2: message,
    position: "top",
    visibilityTime: 3000,
  });
};

export default showToast;
