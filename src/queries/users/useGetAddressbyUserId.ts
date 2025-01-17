import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
import { useQuery } from "@tanstack/react-query";
export type addressWithAdress = Row<"users"> & {
    user: Row<"addresses">;
  };
export const useGetAddressByUserId = (id: string) => {
    return useQuery({
        queryKey: ['user', 'address', id],
        queryFn: () => GetAddressByUserId(id),
        enabled:!!id
    });
};

 export const GetAddressByUserId = async (id: string): Promise<Row<"addresses">[]> => {
    try {
        const { data: addresses, error } = await supabase
            .from("addresses")
            .select("*")
            .eq("user_id", id)
            .eq("is_deleted", false);
        
        if (error) throw new Error("Error fetching addresses: " + error.message);
        
        return addresses || [];  
    } catch (error) {
        console.error(error);
        return [];  
    }
};