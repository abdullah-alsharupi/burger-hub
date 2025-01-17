import { supabase } from "@/src/services/supabase/client";
import { OrderSchema, OrderSchemaType } from "@/src/types/validations/orders";
 
export const createOrder = async (data: OrderSchema ,id:string) => {
  console.log(data.products)
  try {
    const parsedData = OrderSchema.safeParse(data);
console.log(" in create order",parsedData,id)
    if (!parsedData.success) throw new Error("Invalid order data");

    const  dataA = parsedData.data;
    console.log(" in create products order",dataA,id)

    const { data: order, error } = await supabase.rpc(
      'add_user_order_data',
      {  order_data:dataA,
        user_id:id
      }
    );
    console.log("imm order",order);

    console.log(error);

    if (error) throw new Error("Could not complete order.");

    return order;
  } catch (error: any) {
    console.error("Error creating order:", error);
    throw error;
  }
};