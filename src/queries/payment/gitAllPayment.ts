import { supabase } from "@/src/services/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useSessionStore } from "../../store/useSessionStore";

export const useGetUserPaymentMethods = () => {
  const { session } = useSessionStore();
  const userId = session?.id;

  return useQuery({
    queryKey: ["paymentMethods", userId],
    queryFn: () => getUserPaymentMethods(userId),
    enabled: !!userId,
  });
};

const getUserPaymentMethods = async (userId: string | undefined) => {
  if (!userId) {
    throw new Error("error");
  }
  try {
    const { data: paymentMethods, error } = await supabase
      .from("payment_method")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      throw new Error(` ${error.message}`);
    }

    if (!paymentMethods || paymentMethods.length === 0) {
      return [];
    }
    return paymentMethods;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
