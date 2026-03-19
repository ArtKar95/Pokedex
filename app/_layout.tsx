import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";
import queryClient from "../src/api/queryClient";
import { AppToast } from "../src/shared/components/AppToast";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }} />
      </QueryClientProvider>
      <AppToast />
    </>
  );
}
