import { PaymentMethod } from "../schema/enums";

 
export interface PaymentMethodPayPal {
    account_name: string;
    created_at: string;  
    deletedAt: string | null;
    email: string;
    id: number;
    is_deleted: boolean | null;
    method_type: PaymentMethod;
    phone_number: string;
    updatedAt: string | null;
    user_id: string;
}

export interface PaymentMethodVisa {
    card_cvc: number;
    card_number: string;
    phone_number: string;
    email: string;
    account_name: string;
    created_at: string;  
    deletedAt: string | null;
    expire_date: string;  
    id: number;
    is_deleted: boolean | null;
    method_type: PaymentMethod;
    updatedAt: string | null;
    user_id: string;
}

 export interface PaymentMethodsResponse {
    payment_method_visa_super_visa: PaymentMethodVisa[] | null;  
}