import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const ANALYTICS_REFETCH_INTERVAL = 3 * 60 * 60 * 1000;

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  mutationCache: new MutationCache(),
  defaultOptions: {
    mutations: {
      retry: Infinity,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 60000),
      onError: (error, variables, context) => {
        console.error("An error occurred during the mutation:", error);
        console.error("Variables:", variables);
        console.error("Context:", context);
      },
    },
    queries: {
      staleTime: Infinity,
      refetchInterval: Infinity,
      networkMode: "offlineFirst",
    },
  },
});

export default queryClient;

export const invalidateQueries = async () => {
  window.localStorage.removeItem("OFFLINE_KEY");
  await queryClient.refetchQueries();
};