import { supabase } from "@/src/services/supabase/client";
import { OrderSchema, OrderSchemaType } from "@/src/types/validations/orders";

export const createOrder = async (data: OrderSchemaType, id: string) => {
  console.log("Incoming order data:", data);
  
  // Check if productss array is populated
  if (!data.productss || !Array.isArray(data.productss) || data.productss.length === 0) {
    throw new Error("productss array is required and must contain at least one products.");
  }

  data.productss.forEach((products, index) => {
    if (!products.id || !products.name || typeof products.price !== 'number') {
      throw new Error(`products at index ${index} is missing required fields.`);
    }
  });

  try {
    const parsedData = OrderSchema.safeParse(data);
    console.log("Parsed order data:", parsedData, id);

    if (!parsedData.success) {
      console.error("Validation Errors:", parsedData.error.errors);
      throw new Error("Invalid order data");
    }

    const validatedData = parsedData.data;
    console.log("Validated order data:", validatedData, id);

    const { data: order, error } = await supabase.rpc('add_user_order_data', {
      order_data: validatedData,
      user_id: id
    });

    console.log("Order response:", order);
    console.log("Supabase error:", error);

    if (error) throw new Error("Could not complete order.");

    return order;
  } catch (error: any) {
    console.error("Error creating order:", error);
    throw error;
  }
};