import { string, z } from "zod";

export const modifierSchema=z.object({
    name:z.string(),
    products_id:z.number().positive()
});
export type modifierSchema=z.infer<typeof modifierSchema>;