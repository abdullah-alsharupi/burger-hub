import { supabase } from "@/src/services/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const getAllCategories = async () => {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) throw new Error("Failed to fetch categories.");
  return categories;
};
export const getProductsForFirstCategory = async () => {
  try {
    const categories = await getAllCategories();

    if (!categories || categories.length === 0) {
      throw new Error("No categories found.");
    }

    const firstCategoryId = categories[0].id;

    const { data: products, error } = await supabase
      .from("products")
      .select("*")
      .eq("categoriy_id", firstCategoryId);

    if (error) throw new Error("Failed to get products.");

    return products;
  } catch (error: any) {
    console.error("Error getting products:", error);
    throw error;
  }
};
export const useGetProductsForFirstCategory = () => {
  return useQuery({
    queryKey: ["productsForFirstCategory"],
    queryFn: getProductsForFirstCategory,
  });
};
