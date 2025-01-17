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
   onClick: () => void;
   selectedPaymentType?: PaymentMethod
};

function Cash({  onClick,  selectedPaymentType }: Props) {
 
  return (
    < >
      <TouchableOpacity
         style={[
          styles.card,
           selectedPaymentType === 'Cash'? styles.selectedCard : {},
        ]}
        onPress={onClick}  
      >
        <Image
          source={require("@/assets/icons/cash.png")}
          style={{ height: 70, width: 70 }}
        />
        <View style={{ width: "70%", marginLeft: 15 }}>
          <Text style={styles.type}>Cash</Text>
         
        </View>

        { selectedPaymentType === 'Cash' && <View style={styles.radioButton} />}
      </TouchableOpacity>
    </ >
  );
}

const styles = StyleSheet.create({
 
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
 
  type: {
    fontSize: 18,
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

export default Cash;