import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
import { useQuery } from "@tanstack/react-query";
export type addressWithAdress = Row<"addresses">;

export const useGetAddressbyId = (id: string) => {
  return useQuery({
    queryKey: ["address", id],
    queryFn: () => getAddressById(id),
    enabled: !!id,
  });
};

export const getAddressById = async (id: string) => {
  try {
    const { data: address, error } = await supabase
      .from("addresses")
      .select("*")
      .eq("id", id)
      .single();

    if (error) console.error(error);

    return address;
  } catch (error) {
    console.error(error);
    return null;
  }
};
