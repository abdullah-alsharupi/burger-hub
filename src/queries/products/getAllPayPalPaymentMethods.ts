
import { supabase } from "@/src/services/supabase/client"; 
import { useQuery } from "@tanstack/react-query"; 
import { useSessionStore } from "../../store/useSessionStore"; 

export const useGetUserPayPalPaymentMethods = () => {
    const { session } = useSessionStore();
    const userId = session?.id; 

    return useQuery({
        queryKey: ['paypalPaymentMethods', userId], 
        queryFn: () => getUserPayPalPaymentMethods(userId),
        enabled: !!userId, 
    });
}

const getUserPayPalPaymentMethods = async (userId: string | undefined) => {
    if (!userId) {
        throw new Error("User ID not found."); 
    }
    try {
        const { data: paypalPaymentMethods, error } = await supabase
            .from("payment_method") 
            .select("*") 
            .eq("user_id", userId); 

        if (error) {
            throw new Error(` ${error.message}`); 
        }

        return paypalPaymentMethods || []; 
    } catch (error) {
        console.error(error);
        throw error; 
    }
}
