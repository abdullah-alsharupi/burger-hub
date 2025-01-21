import { supabase } from "@/src/services/supabase/client";
import { useQuery } from '@tanstack/react-query';

  
 const getModifiersWithProduct = async (productId: string) => {
     const { data: product, error: productError } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single();

    if (productError) throw productError;

     const { data: modifiers, error: modifiersError } = await supabase
        .from('modifier')
        .select('id, name')  
        .eq('product_id', productId);

    if (modifiersError) throw modifiersError;

     const options = await Promise.all(
        modifiers.map(async (modifier) => {
            const { data: modifierOptions, error: optionsError } = await supabase
                .from('modifier_option')
                .select('option_name,price,id')  
                .eq('modifier_id', modifier.id);

            if (optionsError) throw optionsError;

            return {
                modifierName: modifier.name,
                modifireId: modifier.id,
                modifireOptions: modifierOptions.map(option => ({
                    "modifierOptionName": option.option_name,
                    "modifierOptionPrice": option.price,
                    "modifierOptionId": option.id,


                })),
            };
        })
    );

     return {
        product: product,
        options,
    };
};

 

export const useGetModifiersWithProduct = (id?: string) => {
    return useQuery({
      queryKey: ["Modifiers", id],
      queryFn: async () => {
        if (!id) return null;
        return await getModifiersWithProduct(id as string);
      },
    });
  };