import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper"; // Import from react-native-paper
import Button from "../../ui/Button";
import { useCartStore } from "@/src/store/cart/cartStore";
import { router } from "expo-router";
import { OrderType } from "@/src/store/cart/cartSlice";

type Props = {
  visible?: boolean;
  onClose: any;
};

const OrderDialog = ({ visible, onClose }: Props) => {
  const { cart, changeOrderType } = useCartStore((state) => state);

  const [selectedValue, setSelectedValue] = useState(
    cart.orderType || "Delivery"
  );

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.dialog}>
          <Text style={styles.title}>Select order type</Text>
          <TouchableOpacity
            style={styles.radioGroup}
            onPress={() => setSelectedValue(OrderType.delivery)}
          >
            <RadioButton
              value="delivery"
              status={selectedValue === "delivery" ? "checked" : "unchecked"}
              color="black"
            />
            <Text style={styles.radioLabel}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioGroup}
            onPress={() => setSelectedValue(OrderType.pickup)}
          >
            <RadioButton
              value="pick up"
              status={selectedValue === "pick up" ? "checked" : "unchecked"}
              color="black"
            />
            <Text style={styles.radioLabel}>Pickup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.proceedButton} onPress={onClose}>
            <Button
              title="Proceed"
              color="red"
              size="medium"
              onClick={() => {
                changeOrderType(selectedValue);
                onClose();
                router.navigate("/order/checkOut");
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dialog: {
    width: 300,
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    marginLeft: 12,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 18,
  },
  proceedButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 60,
    width: 280,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default OrderDialog;
