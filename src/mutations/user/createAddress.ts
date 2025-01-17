import { supabase } from "@/src/services/supabase/client";
import { Insert } from "@/src/services/supabase/table.types";
import { useSessionStore } from "@/src/store/useSessionStore";
import { addressSchema } from "@/src/types/validations/address";

export const createAddress = async (data: Insert<"addresses">,userId:string) => {
    try {
      
        const parsedData = addressSchema.safeParse(data);
        if (!parsedData.success) {
            console.log("error validations");
        }

        const { data: address, error } = await supabase
            .from("addresses")
            .insert([{ ...parsedData.data, user_id: userId }]);

        if (error) throw new Error(`Failed to create address`);

        return address;
    } catch (error: any) {
        console.error("Error creating address:", error);
        throw error;
    }
}