import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import ContentDetails from "./ContentDetails";
import ConnectedCardAddress from "./ConnectedCardAddress";
import { useSessionStore } from "@/src/store/useSessionStore";
import ConnectedNotFoundAddressId from "./ConnectedNotFoundAddressId";
import { useCartStore } from "@/src/store/cart/cartStore";
import ConnectedPickUp from "./ConnectedPickUp";
import Proceed from "@/hooks/Proceed";
import { router } from "expo-router";
import ConfirmAddress from "./ConfirmAddress";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CheckOutScreen = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const closeDialog = () => {
    setDialogVisible(!dialogVisible);
  };
  const { session } = useSessionStore();
  const { cart } = useCartStore((state) => state);
  const addressId = cart.addressId;
  const orderType = cart.orderType;

  const confirm = () => {
    if (orderType == "delivery" && !addressId) {
      setDialogVisible(true);
    } else {
      router.navigate("/(drawer)/order/payment");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Delivery</Text>

      <ContentDetails />
      {orderType == "delivery" ? (
        <>
          {!addressId && <ConnectedNotFoundAddressId />}
          {addressId && <ConnectedCardAddress addressId={addressId} change />}
        </>
      ) : (
        <ConnectedPickUp />
      )}

      <Proceed title="Proceed to payment" method={confirm} />
      <ConfirmAddress onClose={closeDialog} visible={dialogVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    height: windowHeight * 0.8,
    width: windowWidth,
    position: "relative",
    paddingHorizontal: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default CheckOutScreen;
