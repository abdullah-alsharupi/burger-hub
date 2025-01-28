import { supabase } from "@/src/services/supabase/client";

export const deleteproductsFavorite = async (productsId: string, userId: string) => {
    try {
        const { data, error } = await supabase
            .from('favorites')
            .delete()
            .eq("userId", userId)
            .eq("productsId", productsId)
 
        console.log("Deleted favorite data:", data);

        if (error) {
            throw new Error(`Failed to delete favorite: ${error.message}`);
        }

        return data;  
    } catch (error: any) {
        console.error("Error deleting favorite:", error.message || error);
        throw error; 
    }
}