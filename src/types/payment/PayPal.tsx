import { z } from "zod";
const phoneNumberRegex = /^[0-9]{10}$/;  

export const PaypalSchema = z.object({
    account_name: z.string().min(2, 'accountname invalid'),
    phone_number: z.string().regex(phoneNumberRegex, "Invalid phone number"),
    email: z.string().email('email invalid'),
    
  });
  
  export type PayPalFormValues = z.infer<typeof PaypalSchema>;

  export type PaypalType = {
    account_name: string;
    phone_number: string;
    email: string;
 
   };