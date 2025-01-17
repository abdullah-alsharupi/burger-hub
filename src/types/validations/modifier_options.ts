import {  z } from "zod";

export const modifierOptionSchema=z.object({
    option_name:z.string(),
    price:z.number().min(0,"must be at least 0"),
    modifier_id:z.number().positive()
});
export type modifierOptionSchema=z.infer<typeof modifierOptionSchema>