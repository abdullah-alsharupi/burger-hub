import { z } from "zod";
const phoneNumberRegex = /^[0-9]{10}$/;  


export const payment_MethodSchema = z.object({
    card_number: z.string().length(16, 'card Number you must be 16'),
    expire_date: z.string().min(5, 'expireDate invaild'),
    card_cvc: z.string().length(3, 'CVV you must be 3'),
  });
 export type payment_MethodFormValues = z.infer<typeof payment_MethodSchema>;
  export type payment_MethodType = {
    card_number: string;
    expire_date: string;
    card_cvc: string;
  
 
}

 

 