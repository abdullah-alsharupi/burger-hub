import React from "react";
 import ConfirmationScreen from "@/src/components/order/confirmation/ConfirmationScreen";
import Header from "@/src/components/ui/Header";
 
const OrderConfirmation = () => {
  return (
    <> 
     <Header title='Order Confirmation' backgroundColorCode='#F2F2F2'/>
     <ConfirmationScreen/>
    </>
  );
};

 

export default OrderConfirmation;