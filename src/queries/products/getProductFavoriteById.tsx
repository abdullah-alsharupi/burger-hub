import { supabase } from "@/src/services/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const getFavoriteproductssByUserIdWithproductsId = async (
  productsId: string,
  id: string
) => {
  try {
    const { data: favorite, error: favoritesError } = await supabase
      .from("favorites")
      .select("*")
      .eq("userId", id)
      .eq("productId", productsId);
      console.log("im error in favorites",favoritesError)
    if (favoritesError) throw new Error("Failed to get favorites.");

    return favorite;
  } catch (error: any) {
    console.error("Error getting favorite products:", error);
    throw error;
  }
};

export const useGetFavoriteproductssByUserIdWithproductsId = (
  productsId: string,
  id: string
) => {
  return useQuery({
    queryKey: ["sd"],
    queryFn: async () => {
      const productss = await getFavoriteproductssByUserIdWithproductsId(
        productsId,
        id
      );
      return productss;
      
    },
  });
};
