import { StateCreator, StoreApi } from "zustand";


export type StateSlice<T extends object> = StateCreator<T> | StoreApi<T>;
