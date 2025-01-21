import { supabase } from "@/src/services/supabase/client";
import { OrderSchema, OrderSchemaType } from "@/src/types/validations/orders";

export const createOrder = async (data: OrderSchemaType, id: string) => {
  console.log("Incoming order data:", data);
  
  // Check if products array is populated
  if (!data.products || !Array.isArray(data.products) || data.products.length === 0) {
    throw new Error("Products array is required and must contain at least one product.");
  }

  data.products.forEach((product, index) => {
    if (!product.id || !product.name || typeof product.price !== 'number') {
      throw new Error(`Product at index ${index} is missing required fields.`);
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