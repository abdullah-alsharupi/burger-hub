import {z} from "zod"
export const CategorySchema=z.object({
    name:z.string(),
    resturant_id:z.number().positive()
});
export type CategorySchema=z.infer<typeof CategorySchema>;