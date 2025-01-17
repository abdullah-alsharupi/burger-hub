 import { PaymentMethod } from "@/src/types/schema/enums";
import { PaymentMethodPayPal } from "@/src/types/validations/Payments";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  paymentMethode: PaymentMethodPayPal;
  onClick: () => void;
  selectedPaymentID?: number;
  selectedPaymentType?: PaymentMethod
};

function Paypal({ paymentMethode, onClick, selectedPaymentID=0, selectedPaymentType }: Props) {
 
  return (
    < >
      <TouchableOpacity
        key={paymentMethode.id}
        style={[
          styles.card,
          selectedPaymentID === paymentMethode.id && selectedPaymentType === paymentMethode.method_type ? styles.selectedCard : {},
        ]}
        onPress={onClick}  
      >
        <Image
          source={require("@/assets/icons/Paypal.png")}
          style={{ height: 70, width: 70 }}
        />
        <View style={{ width: "70%", marginLeft: 15 }}>
          <Text style={styles.type}>PayPal</Text>
          <Text style={styles.lastFour}>
            {`**** **** **** ${paymentMethode?.phone_number?.slice(-4)}`}
          </Text>
        </View>

        {selectedPaymentID === paymentMethode.id && selectedPaymentType === paymentMethode.method_type && <View style={styles.radioButton} />}
      </TouchableOpacity>
    </ >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  card: {
    padding: 16,
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ddd",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 90,
    width: width * 0.8,
  },
  selectedCard: {
    borderColor: "#000",
    backgroundColor: "#3C2F2F",
  },
  brand: {
    fontSize: 18,
    fontWeight: "600",
  },
  type: {
    fontSize: 14,
    color: "#666",
  },
  lastFour: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  radioButton: {
    position: "absolute",
    right: 10,
    top: 30,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
});

export default Paypal;