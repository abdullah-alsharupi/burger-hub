import { supabase } from "@/src/services/supabase/client";

export const addressDelete = async (address_Id: number, userId: string) => {

  try {
    // soft delete
    const { error } = await supabase
      .from("addresses")
      .update({ is_deleted: true, updated_at: new Date().toISOString() }) 
      .eq("id", address_Id)
      .eq("user_id", userId); // Ensure the user owns the address

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Error in delete address");
    }

  
  } catch (error: any) {
    console.error("Caught error in delete address:", error);
    throw error; 
  }
};