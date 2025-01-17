import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ListItems from "./ListItems";
import { useCartStore } from "@/src/store/cart/cartStore";
import ConnectedPickUp from "../checkout/ConnectedPickUp";
import Proceed from "@/hooks/Proceed";
import { router } from "expo-router";
import { createOrder } from "@/src/mutations/order/createOrder";
import { useSessionStore } from "@/src/store/useSessionStore";
import { useCustomToast } from "@/src/hooks/useCustomToast";
import { ActivityIndicator } from "react-native-paper";
import ConnectedCardAddress from "../checkout/ConnectedCardAddress";

const ConfirmationScreen = () => {
  const [load, setLoad] = useState(false);

  const { session } = useSessionStore();
  const showToast = useCustomToast();
  const { cart, removeCart } = useCartStore((state) => state);
  const addressId = cart.addressId;
  const orderType = cart.orderType;
  const ComplateOrder = async () => {
    if (session) {
      setLoad(true);
      const order = await createOrder(cart, session?.id);

      console.log("im order in cinfirmation", order);
      if (order) {
        showToast("Order Added  successfully!", { type: "success" });
        setLoad(false);
        router.navigate("/(drawer)/main");
        removeCart();
      } else {
        setLoad(false);
        showToast("can not add the order please try agin", { type: "error" });
      }
    } else {
      router.navigate("/auth");
    }
  };

 
  return (
    <View style={styles.container}>
      {
        load &&    <ActivityIndicator
        size={"large"}
        color={"#AF042C"}
        style={{position:'absolute',left:'50%'}}
       />
      }
     

      <ListItems />
    


      {orderType == "delivery" ? (
        <ConnectedCardAddress addressId={addressId || ""} />
      ) : (
        <ConnectedPickUp />
      )}

      <Proceed title="Proceed to payment" method={ComplateOrder} />
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F2F2F2",
  },
  title: {
    fontSize: 33,
    marginBottom: 40,
    fontWeight: "bold",
    marginTop: 20,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
