import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
import { useQuery } from "@tanstack/react-query";


export const getproductsByCategoryId = async (categoryId: string) => {
  try {
    if (!categoryId) throw new Error("No category ID provided.");

    const { data: products, error } = await supabase
      .from("products")
      .select("*")
      .eq("categoriy_id", categoryId); 

    if (error) throw new Error("Failed to get products.");

    return products as Row<'products'>[] || [];
  } catch (error: any) {
    console.error("Error getting products:", error);
    throw error;
  }
};


export const useGetproductsByCategoryId = (categoryId: string) => {
  return useQuery({
    queryKey: ["products", categoryId],
    queryFn: async () => {
      if (!categoryId) return [];
      const products = await getproductsByCategoryId(categoryId);
      console.log(products); 
      return products as Row<'products'>[];
    },
  });
};
