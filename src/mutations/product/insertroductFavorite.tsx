 import { supabase } from "@/src/services/supabase/client";
  
export const insertroductFavorite = async (productsId: string,userId:string) => {

    try {
 
       
        const { data:favorite, error } = await supabase
        .from('favorites')
        .insert([
          { productsId: productsId, userId: userId },
        ]).select()
         if (error) throw new Error(`Failed to create favorite`);

        return favorite;
    } catch (error: any) {
        console.error("Error creating favorite:", error);
        throw error;
    }
}

 