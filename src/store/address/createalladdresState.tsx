import { addresses } from "@/src/types/schema/address";
import { StateCreator } from "zustand";

export type AllAddressState = {
  addresses?: addresses[]; // Optional array of addresses
  setAddress: (addresses: addresses[]) => void; // Function to set addresses
};

// Create the slice of state
export const createAllAddressSlice: StateCreator<AllAddressState> = (set) => ({
  addresses: [], // Initialize as an empty array
  setAddress: (addresses) => set({ addresses }),
});