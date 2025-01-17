import { supabase } from "@/src/services/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: getAllCategories,
    });
}

const getAllCategories = async () => {
    try {
        const { data: categories, error } = await supabase
            .from("categories")
            .select("*");

        // if (error) {
        //     throw new Error(error.message);
        // }
console.log('im in git all cat ',categories)
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}