import { z } from "zod";
const zipCodeRegex = /^\d{5}(-\d{4})?$/;
export const addressSchema=z.object({
    country:z.string().min(1,"country is required").max(20,"country is too long"),
    city:z.string().min(1,"city is required").max(50,"city is too long"),
    state:z.string().min(1,"state is required").max(30,"state is too long"),
    street:z.string().min(1,"street is required").max(100,"street is too long"),
    zip_code:z.string().regex(zipCodeRegex,"Invalid zip code")

});

export type addressSchemaType=z.infer<typeof addressSchema>;