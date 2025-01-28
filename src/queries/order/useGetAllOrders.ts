import { supabase } from "@/src/services/supabase/client";
import { Row } from "@/src/services/supabase/table.types";
import { useOrderStore } from "@/src/store/oder/useOrderStore";
import { useSessionStore } from "@/src/store/useSessionStore";
import { useQuery } from "@tanstack/react-query";

export type OrderWithAddress = Row<"orders"> & {
  Addresses: Row<"addresses">
  User:Row<"users">;
  productss: Row<"order_items">[];
};

export const useGetAllOrders = (id: string) => {
  const setOrder=useOrderStore().setGlobalOrders
  return useQuery({
    queryKey: ["orders", "address", id],
    queryFn: async () => {
      const order = await GetAllOrders(id);
      setOrder(order)
      return order;
    },
  });
};

const GetAllOrders = async (userId: string): Promise<OrderWithAddress[]> => {
  try {
    const { data: orders, error } = await supabase
      .from("orders")
      .select(`
        *,
        addresses:address_id(*),
        users:user_id(*)
      `)
      .eq("user_id", userId);

    if (error) {
      console.error("Error in fetching orders:", error);
      return [];
    }
    return orders as unknown as OrderWithAddress[];
  } catch (error: any) {
    console.error("Error in fetching orders:", error);
    return [];
  }
};