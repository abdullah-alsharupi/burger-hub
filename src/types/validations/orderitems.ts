import { z } from "zod";

export const orderitemsSchema=z.object({
    product_id:z.number().int().positive(),
    order_id:z.number().int().positive(),
    name:z.string().min(1,"is required").max(50,"product name is too long"),
    price:z.number().min(0, "price must be at least 0"),
    imageurl:z.string().refine(()=>File).optional(),
    quantity:z.number().int().positive(),
    notes:z.string()
   
});
export type orderitemsSchemaType=z.infer<typeof orderitemsSchema>