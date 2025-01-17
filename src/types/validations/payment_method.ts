import { z } from "zod";

export const PaymentMethodSchema = z.object({
    card_cvc: z.number().nullable().optional(),
    card_number: z.string().nullable().optional(),
    cardt_type: z.string().nullable().optional(),
    created_at: z.string().optional(),
    deletedAt: z.string().nullable().optional(),
    expire_date: z.string().nullable().optional(),
    id: z.number().optional(),
    is_deleted: z.boolean().nullable().optional(),
    updatedAt: z.string().nullable().optional(),
    user_id: z.string().nonempty("User ID is required"),
  });
 export type PaymentMethodSchema=z.infer<typeof PaymentMethodSchema>