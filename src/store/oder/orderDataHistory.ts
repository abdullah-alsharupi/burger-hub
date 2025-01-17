import { StateCreator } from "zustand";
import { OrderWithAddress } from "../../queries/order/useGetAllOrders";

export type OrdersDataState = {
  globalOrders: OrderWithAddress[];
  setGlobalOrders: (orders: OrderWithAddress[]) => void;

  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  filteredOrders: OrderWithAddress[];
  filterOrders: () => void;
};

const initialValues: Pick<
  OrdersDataState,
  "globalOrders" | "searchQuery" | "filteredOrders"
> = {
  globalOrders: [],
  searchQuery: "",
  filteredOrders: [],
};

export const createOrdersDataSlice: StateCreator<OrdersDataState> = (
  set,
  get
) => ({
  ...initialValues,
  setGlobalOrders: (globalOrders) => {
    set({ globalOrders });
    get().filterOrders();
  },
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  filterOrders: () => {
    const { searchQuery, globalOrders } = get();

    if (!searchQuery) {
      return set({ filteredOrders: globalOrders });
    }
  },
});
