import queryClient from "@/src/services/react-query";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { TabProvider } from "./TabContext";
import { ToastProvider } from "react-native-toast-notifications";
import Disconnected from "@/app/disconnected";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <TabProvider>{children}</TabProvider>
        </SafeAreaProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
};

export default Providers;
