import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import "../global.css";
import queryClient from "../src/api/queryClient";
import { FavoritesContext } from "../src/features/pokemon/hooks/useFavoritesContext";
import useFavoritesStorage from "../src/features/pokemon/hooks/useFavoritesStorage";

export default function RootLayout() {
  const { favorites, toggle } = useFavoritesStorage();

  return (
    <>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <FavoritesContext value={{ favorites, toggle }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen
              name="pokemon/[id]"
              options={{
                presentation: "modal",
                animation: "slide_from_bottom",
              }}
            />
          </Stack>
        </FavoritesContext>
      </QueryClientProvider>
      <Toast />
    </>
  );
}
