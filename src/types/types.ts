import { Animated } from "react-native";


export interface PaymentMethod {
    id: number;
    method_type: string | null; 
    card_number?: string | null;
    account_name?: string | null | undefined; 
}


export interface PaymentCardProps {
    method: PaymentMethod;
    translateX: { [key: number]: Animated.Value };
    isSwiped: { [key: number]: boolean };
    handleSwipe: (id: number, translationX: number) => void;
    handleDelete: (id: number, methodType: string) => Promise<void>; 
}


export interface PayPalCardProps {
    method: PaymentMethod;
    translateX: { [key: number]: Animated.Value };
    isSwiped: { [key: number]: boolean };
    handleSwipe: (id: number, translationX: number) => void;
    handleDelete: (id: number) => Promise<void>;
}


export interface LoadingIndicatorProps {
    color?: string;
}


export interface ErrorTextProps {
    message: string;
}
