import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
 import Proceed from "@/hooks/Proceed";
import { router } from "expo-router";
import ListPaymentMethod from "./ListPaymentMethod";
import { useSessionStore } from "@/src/store/useSessionStore";
import { useCartStore } from "@/src/store/cart/cartStore";
import { useGetAllPaymentUser } from "@/src/queries/payment/getAllPaymentUser";
 import { ActivityIndicator } from "react-native-paper";
import { PaymentMethod } from "@/src/types/schema/enums";
const { width } = Dimensions.get("window");

const PaymentScreen = () => {

  const { session } = useSessionStore();
  const { cart ,setPayment } = useCartStore(state => state);

 
   const userId = session?.id;
  const {
    data: payments,
    error,
    refetch,
    isLoading,
    isFetched
  } = useGetAllPaymentUser(userId as string);

 
  

 
   const setCurrentPayment = (id: number , paymentType :PaymentMethod) => {
     setPayment(id,paymentType);
  };
  return (
    <View style={styles.container}>
      
    {isLoading && <ActivityIndicator size="large" color="#AF042C" />}

    {
    isFetched && (
    payments ? (
      <ListPaymentMethod dataPayments={payments} />
    ) : (
      <Text>No payment methods available.</Text>
    ))}

    <Proceed
      title="Proceed to payment"
      method={() => router.navigate("/(drawer)/order/orderConfirmation")}
    />
  </View>
  );
};
export default PaymentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:'8%',
  
  },
 
});
