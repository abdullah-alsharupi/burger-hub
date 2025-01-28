 

import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
import { usesearchStore } from "@/src/store/search/searchStore"; // Fixed naming convention
import { useQuery } from "@tanstack/react-query";

export const useSearchproducts = (query: string) => {
 
return useQuery<Row<'products'>[]>({
  queryKey: ['searchproducts', query], 
  queryFn: async (): Promise<Row<'products'>[]> => {
    console.log('Executing search with query:', query);  

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .ilike('name', `%${query}%`);  

    if (error) {
      console.error('Search Error:', error.message);
      throw new Error(error.message);
    }

    // Ensure the data is in the correct format
    const products = data as unknown as Row<'products'>[]; // Cast the data to products[]

 

    return products; // Return the data instead of setting the search term
  },
  enabled: !!query,  
});
};
