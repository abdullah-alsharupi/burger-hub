import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";
import { StateSlice } from "../types/state"; // Adjust the import as needed

export type UserSession = {
  name: string;
  phone: string;
  email: string;
  id: string ;
};

type SessionState = {
  session: UserSession | null;
  setSession: (session: UserSession | null) => void;
};

const createSessionSlice: StateSlice<SessionState> = (set, get, store) => ({
  session: null,
  setSession: (session) => set({ session }),
});

const customStorage: PersistStorage<SessionState> = {
  getItem: async (name) => {
    const value = await AsyncStorage.getItem(name);
    return value ? JSON.parse(value) : null;  
  },
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, JSON.stringify(value)); 
  },
  removeItem: async (name) => {
    await AsyncStorage.removeItem(name);
  },
};

export const useSessionStore = create<SessionState>()(
  persist(
    (set, get, store) => ({
      ...createSessionSlice(set, get, store), // Pass all three parameters
    }),
    {
      name: "session-storage", // unique name for the persisted state
      storage: customStorage, 
    }
  )
);

export const getSession = () => {
  return useSessionStore.getState().session;
};
