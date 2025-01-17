import React from "react";
import PaymentScreen from "@/src/components/order/payment/PaymentScreen";
import Header from "@/src/components/ui/Header";

const Payment = () => {
  return (
    <>
      <Header title='Checkout' backgroundColorCode='#F2F2F2'/>
      <PaymentScreen />
    </>
  );
};

 

export default Payment;