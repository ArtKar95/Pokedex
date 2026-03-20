import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import "../global.css";
import queryClient from "../src/api/queryClient";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }} />
      </QueryClientProvider>
      <Toast />
    </>
  );
}
