import React from "react";
import Header from "@/src/components/ui/Header";
import Listproducts from "@/src/components/order/cart/ListProduct";
 
const Cart = () => {
  return (
    <>
     <Header title='Cart' backgroundColorCode='#F2F2F2'/>
     <Listproducts/>
    </>
  );
};

 

export default Cart;