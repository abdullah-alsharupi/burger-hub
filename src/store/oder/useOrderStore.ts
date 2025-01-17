import { create } from "zustand";

import { createOrdersDataSlice, OrdersDataState } from "./orderDataHistory";

type OrderState = OrdersDataState & OrdersDataState;

export const useOrderStore = create<OrderState>((set, get, store) => ({
  ...createOrdersDataSlice(set, get, store),
  ...createOrdersDataSlice(set, get, store),
}));
