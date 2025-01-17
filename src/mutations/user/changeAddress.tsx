import { supabase } from "@/src/services/supabase/client";

export const addressChane = async (address_id:number) => {
    try {
        const { data: address, error } = await supabase
            .from("addresses")
            .update({updated_at:new Date().toISOString()})
            .eq("id",address_id)

        if (error) throw new Error(`Failed to change address`);

        return address;
    } catch (error: any) {
        console.error("Error change address:", error);
        throw error;
    }
}