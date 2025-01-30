import { supabase } from "@/src/services/supabase/client";

export const deleteProductFavorite = async (productId: string, userId: string) => {
    try {
        const { data, error } = await supabase
            .from('favorites')
            .delete()
            .eq("userId", userId)
            .eq("productId", productId)
 
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