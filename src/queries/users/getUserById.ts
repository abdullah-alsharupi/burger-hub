import { supabase } from "@/src/services/supabase/client";


export const getUserById = async (id: string) => {
    try {
      
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", id)
        .single();
   
      if (error) throw new Error("Order not found!");
  
      return data ;
    } catch (error: any) {
      console.error("Error getting order:", error);
      throw error;
    }
  };