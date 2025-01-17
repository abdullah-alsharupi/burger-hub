import { orderStatus } from "../types/schema/order";


export const formatStatus = (status?: orderStatus) => {
  if (status === "pending") return "Pending";
  if (status === "preparing") return "Preparing";
  if (status === "confirmed") return "Confirmed";
  if (status === "received") return "Recieve";
  if (status === "out for delivery") return "out for delivery";
  if (status === "reject") return "Reject";
  return "Unknown";
};
