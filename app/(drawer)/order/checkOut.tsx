import React from "react";
 
import CheckOutScreen from "@/src/components/order/checkout/CheckOutScreen";
import Header from "@/src/components/ui/Header";

const CheckOut = () => {
  return (
    <>
      <Header title='Checkout' backgroundColorCode='#F2F2F2'/>
      <CheckOutScreen />
    </>
  );
};
export default CheckOut;