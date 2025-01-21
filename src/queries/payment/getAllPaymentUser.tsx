import { supabase } from "@/src/services/supabase/client";
import { PaymentMethodsResponse } from "@/src/types/validations/Payments";
 import { useQuery } from "@tanstack/react-query";
interface GetUserPaymentMethodsParams {
    p_user_id: string;
}
export const useGetAllPaymentUser = (id: string) => {
  return useQuery<PaymentMethodsResponse | null, Error>({
    queryKey: ["payments", id],
    queryFn: async () => {
      const userPaments = await getAllPaymentUser(id);
      return userPaments;
    },
  });
};
const getAllPaymentUser = async (userId: string): Promise<PaymentMethodsResponse|null> => {
  try {
    const { data: payments, error } = await supabase
    
      .from('payment_method')
      .select("*")
      .eq("user_id",userId)
    if (error) {
      console.error("Error fetching payments:", error);
      return null; // Return null instead of an empty array
    }
    return payments as unknown as PaymentMethodsResponse
  } catch (error: any) {
    console.error("Error in fetching orders:", error);
    return null; // Return null on error
  }
};