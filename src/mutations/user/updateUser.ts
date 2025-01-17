import { supabase } from "@/src/services/supabase/client";
import { Update } from "@/src/services/supabase/table.types";

export const updateUser=async (data:Update<"users">)=>{
    try {
        
        if(!data.id)   throw new Error("can't find user!")

        
        const {data:user,error}=await supabase
        .from("users")
        .update(data)
        .eq("id",data.id)
      
        if (error) throw new Error("Failed to update user!");

        return user
  } catch (error: any) {
    console.error("Error update user:", error);
    throw error;
  }

}