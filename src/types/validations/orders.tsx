 import { nullable, z } from 'zod';
  enum PaymentMethod {
   Visa = "visa",
   SuperVisa = "super visa",
   PayPal = "paypal",
   Cash = "cash",
}
 export const ModifierOptionSchema = z.object({
    modifierOptionName: z.string(),

    modifierOptionId: z.string().nullable(),
    modifierOptionPrice: z.number().nullable(),
});

 export const OptionSchema = z.object({
    modifierName: z.string(),

    modifireId: z.string(),
    modifireOptions: z.array(ModifierOptionSchema).nullable().optional(),
});

 export const productsSchema = z.object({
    id: z.string(),
    imageurl: z.string().nullable().optional(),  
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    note:z.string().nullable().optional(),
    options: z.array(OptionSchema).nullable(),
});
 export enum OrderType {
    Delivery = 'delivery',
    Pickup = 'pick up',
  }

 export const OrderSchema = z.object({
    productss: z.array(productsSchema),
    orderType: z.enum([OrderType.Delivery, OrderType.Pickup]).optional(),
    paymentId: z.string().optional(),
    addressId: z.string().nullable(),
    totalAmount:z.number().optional(),
    totalQuantity:z.number().optional(),
    paymentType: z.enum([PaymentMethod.Visa, PaymentMethod.SuperVisa, PaymentMethod.PayPal, PaymentMethod.Cash]).optional()
});
  

export type OrderSchemaType = z.infer<typeof OrderSchema>;