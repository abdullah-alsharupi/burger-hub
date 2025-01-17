import { supabase } from "@/src/services/supabase/client";
import { useAddressStore } from "@/src/store/address/useaddressStore";
import { useSessionStore } from "@/src/store/useSessionStore";
import { addresses } from "@/src/types/schema/address";
import { useQuery } from "@tanstack/react-query";

export const useGetUpdatedAddresses = () => {
  const setAddress = useAddressStore((state) => state.setAddress);

  return useQuery({
    queryKey: ["address Updated"],
    queryFn: async () => {
      const addresses = await getUpdatedAddresses();
      setAddress(addresses);
      return addresses;
    },
  });
};

const getUpdatedAddresses = async () => {
  try {
    const { session } = useSessionStore.getState();
    const userId = session?.id;

    if (!userId) {
      throw new Error("User ID is not available.");
    }

    const { data: addresses, error } = await supabase
      .from("addresses")
      .select("*")
      .eq("user_id", userId as string)
      .eq("is_deleted", false)
      .order("updated_at", { ascending: false }) // Sort by last updated date
      .limit(1);

    if (error) {
      console.log(error.message);
    }

    return addresses || [];
  } catch (error: any) {
    console.error("Error fetching addresses:", error);
    throw error;
  }
};
