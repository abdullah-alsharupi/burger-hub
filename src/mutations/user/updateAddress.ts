import { supabase } from "@/src/services/supabase/client";
import { Update } from "@/src/services/supabase/table.types";


export const updateAddress=async (data:Update<"addresses">)=>{
    try {
        if(!data.id){
            throw new Error("can't find address")
        }
        const {data:address,error}=await supabase
        .from("addresses")
        .update(data)
        .eq("id",data.id)
      
        if (error) throw new Error("Failed to update address!");

        return address
  } catch (error: any) {
    console.error("Error update address:", error);
    throw error;
  }

}