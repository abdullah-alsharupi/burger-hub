import { z } from "zod";
import { productsSchema } from "./product";

export const orderSchema = z.object({
  address_id: z.string(),
  payment_method_id: z.string(),
  deliveryAt: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Invaild timestamp"),
  order_type: z.enum(["delivery", "pick up"]).optional(),
  status: z
    .enum([
      "received",
      "pending",
      "confirmed",
      "preparing",
      "out for delivery",
      "cancelled",
    ])
    .default("pending"),
    productss:z.array(productsSchema).min(1,"At least one products is required"),
    totalAmount: z.number().min(0, "total must be at least 0"),
    totalQuantity:z.number().optional().nullable(),
  user_id: z.string(),
});
export type orderSchemaType=z.infer<typeof orderSchema>;