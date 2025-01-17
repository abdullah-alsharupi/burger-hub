import { create } from "zustand";
import { CartState, createCartSlice } from "./cartSlice";
  
  
export const useCartStore = create<CartState>((set, get, store) => ({
   ...createCartSlice(set, get, store),
 
}));