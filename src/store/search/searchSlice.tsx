 import { Row } from "@/src/services/supabase/table.types";
import {  StateCreator } from "zustand";
 



export type SearchStore = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  clearSearchTerm: () => void;
  productsOfSearch:Row<'products'>[]
  setProductsOfSearch:(products : Row<'products'>[])=> void
};

 export const createSearchStore: StateCreator<SearchStore> = (set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  clearSearchTerm: () => set({ searchTerm: "" }),
  productsOfSearch:[],
  setProductsOfSearch:(products)=> set({productsOfSearch:products}) 


});

 