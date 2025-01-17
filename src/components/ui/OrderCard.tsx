import { router } from "expo-router";
import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
const { height, width } = Dimensions.get("screen");
type CardProps = {
  height: number;
  width: number;
  children: React.ReactNode;
  id: number;
};

const OrderCard = ({ height, width, children, id }: CardProps) => {
  return (
    <TouchableOpacity
      onPress={() => router.navigate(`/(drawer)/Order History/${id}`)}
      style={[styles.card, { height, width }]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    margin: 15,
  },
});
