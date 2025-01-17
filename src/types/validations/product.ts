import { z } from "zod";

export const ProductSchema=z.object({
    restaurant_Id:z.number().int().positive(),
    categoriy_id:z.number().int().positive(),
    name:z.string().min(1,"is required").max(50,"product name is too long"),
    imageurl:z.string().refine(()=>File).optional(),
    price:z.number().min(0, "price must be at least 0"),
   
});
export type ProductSchemaType=z.infer<typeof ProductSchema>