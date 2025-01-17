import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useCartStore } from "@/src/store/cart/cartStore";
import { router } from "expo-router";
import Button from "@/src/components/ui/Button";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Props = {
  title: string;
  method: () => void;
};
const Proceed = ({ title, method }: Props) => {
  const { cart, totalPrice } = useCartStore((state) => state);
  return (
    <View style={styles.container}>
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}>${cart?.totalAmount}</Text>
      </View>

      <Button title={title} color="red" size="large" onClick={method} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.2,
    width: "100%",
    position: "absolute",
    bottom: 20,
    left: "10%",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 22,
    fontWeight: "600",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Proceed;
