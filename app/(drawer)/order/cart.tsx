import React from "react";
 import ListProduct from "@/src/components/order/cart/ListProduct";
import Header from "@/src/components/ui/Header";
 
const Cart = () => {
  return (
    <>
     <Header title='Cart' backgroundColorCode='#F2F2F2'/>
     <ListProduct/>
    </>
  );
};

 

export default Cart;