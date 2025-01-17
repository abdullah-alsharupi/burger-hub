import { z } from "zod";

 
export const LogInSchema = z.object({
 
    email: z.string()
        .nonempty("Email is required")
        .email("Invalid email format"),
    
    password: z.string()
        .min(8, "Must be at least 8 characters in length."),
});
export type LogInSchemaType = z.infer<typeof LogInSchema>;