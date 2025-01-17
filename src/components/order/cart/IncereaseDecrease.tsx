import { useCartStore } from "@/src/store/cart/cartStore";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
type Props = {
  id: string;
  quantity: number;
};

const IncereaseDecrease = ({ quantity, id }: Props) => {
  const { increaseQuantity, decreaseQuantity } = useCartStore((state) => state);

  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity
        onPress={() => {
          decreaseQuantity(id);
        }}
        style={styles.quantityButton}
      >
        <Text style={styles.quantityText}>
          <AntDesign name="minus" size={12} color="white" />
        </Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity
        onPress={() => {
          increaseQuantity(id);
        }}
        style={styles.quantityButton}
      >
        <Text style={styles.quantityText}>
          <AntDesign name="plus" size={12} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#AF042C",
    borderRadius: 15,
    justifyContent: "flex-start",
    width: 68,
    height: 30,
  },
  quantityButton: {
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    color: "#FFFFFF",
  },
  quantity: {
    fontSize: 11,
    color: "#FFFFFF",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  desc2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    left: 10,
  },
});

export default IncereaseDecrease;
