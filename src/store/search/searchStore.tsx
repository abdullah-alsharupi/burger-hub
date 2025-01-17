import { create } from "zustand";
 
import { createSearchStore, SearchStore } from "./searchSlice";
export const usesearchStore = create<SearchStore>((set, get, store) => ({
  ...createSearchStore(set, get, store),
}));

