import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/src/components/ui/Header";
import UserPaymentScreen from "@/src/components/paymentMethod/userPaymentScreen";
import Disconnected from "../disconnected";
 
const Payments = () => {
  return (
    <>
      <Header title="Payments Methods" backgroundColorCode="#F2F2F2" />
       <UserPaymentScreen />
    
     </>
  );
};

export default Payments;

const styles = StyleSheet.create({});
