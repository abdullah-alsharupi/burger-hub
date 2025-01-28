import { supabase } from "@/src/services/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "../../store/useSessionStore";

export type products = {
  id: string;
  name: string;
  price: number;
  imageurl: string; 
};

export const getFavoriteproductsByUserId = async (id:string): Promise<products[]> => {
  try {
  
   
    const { data: favorites, error: favoritesError } = await supabase
      .from("favorites")
      .select("*")
      .eq("userId", id);

    if (favoritesError) throw new Error("Failed to get favorites.");

   
    if (!favorites || favorites.length === 0) return [];

   
    const productsIds = favorites.map(favorite => favorite.productId);
    const { data: products, error: productsError } = await supabase
      .from("products") 
      .select("*")
      .in("id", productsIds); 

    if (productsError) throw new Error("Failed to get products.");

    return (products as products[]) || []; 
  } catch (error: any) {
    console.error("Error getting favorite products:", error);
    throw error;
  }
};

export const useGetFavoriteproductsByUserId = (id:string) => {
  return useQuery<products[], Error>({
    queryKey: ["favoriteproducts"],
    queryFn: async () => {
      const products = await getFavoriteproductsByUserId(id);
      return products;
    },
  });
};