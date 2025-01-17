import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import Providers from "@/src/components/layout/Providers";
import { redirectAuth } from "@/src/hooks/redirectAuth";
import { useSessionStore } from "@/src/store/useSessionStore";
import React from "react";
import Disconnected from "./disconnected";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Providers>
      <RootLayoutMain />
    </Providers>
  );
}
function RootLayoutMain() {
  const session = useSessionStore((state) => state);
{console.log("im seassession",session)
}
  <Disconnected/>
  redirectAuth();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen name="Favorite" options={{ headerShown: false }} />
      <Stack.Screen name="Addresses" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="payments" options={{ headerShown: false }} />
    </Stack>
  );
}
