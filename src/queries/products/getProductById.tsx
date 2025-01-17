import { supabase } from "@/src/services/supabase/client";
import { useQuery } from "@tanstack/react-query";



export const getProductById = async (id: number) => {
  try {
    if (!id) throw new Error("No product found.");

    const { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw new Error("Failed to get product.");

    return product;
  } catch (error: any) {
    console.error("Error getting product:", error);
    throw error;
  }
};



export const useGetProductById = (id?: number) => {
    return useQuery({
      queryKey: ["product", id],
      queryFn: async () => {
        if (!id) return null;
        return await getProductById(id);
      },
    });
  };