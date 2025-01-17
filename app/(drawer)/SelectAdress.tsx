import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import AddressScreen from "@/src/components/order/Addresses/AddressScreen";
import Header from "@/src/components/ui/Header";

const SelectAdress = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Header title="Select Address" backgroundColorCode="#F2F2F2" />
      <AddressScreen />
    </>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SelectAdress;
