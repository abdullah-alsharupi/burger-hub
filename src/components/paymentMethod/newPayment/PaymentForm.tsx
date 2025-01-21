import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { PaypalType } from "@/src/types/payment/PayPal";
import { payment_MethodType } from "@/src/types/payment/VisaSuperVisa";
import PayPalForm from "./PaymentsForms/PayPalForm";
import VisaForm from "./PaymentsForms/VisaForm";
import { PaymentMethod } from "@/src/types/schema/enums";

interface PaymentFormProps {
  paymentMethod: PaymentMethod;
  loading: boolean;
  handleSubmitPyPal: (data: PaypalType) => void;
  handleSubmitVisaSuperVisa: (data: payment_MethodType) => void;
}
const PaymentForm: React.FC<PaymentFormProps> = ({
  paymentMethod,
  handleSubmitPyPal,
  loading,
  handleSubmitVisaSuperVisa,
}) => {
  return (
    <View>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#AF042C" />
        </View>
      )}
      {paymentMethod === "visa" || paymentMethod === "super visa" ? (
        <VisaForm onSubmit={handleSubmitVisaSuperVisa} />
      ) : paymentMethod === "paypal" ? (
        <PayPalForm onSubmit={handleSubmitPyPal} />
      ) : null}
    </View>
  );
};

export default PaymentForm;
const styles = StyleSheet.create({
  loaderContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -50,
    marginTop: -50,
    height: 100,
    width: 100,
    opacity: 0.4,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
