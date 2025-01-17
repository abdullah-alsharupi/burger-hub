import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/src/components/ui/Header";
 import { Stack } from "expo-router";
import NewPaymentScreen from "@/src/components/paymentMethod/newPayment/NewPaymentScreen";
 
const NewPaymentMethod = () => {
  return (
    <>
       <Header title="New Payment   " backgroundColorCode="#F2F2F2" />
       <NewPaymentScreen />

     </>
  );
};

export default NewPaymentMethod;

const styles = StyleSheet.create({});