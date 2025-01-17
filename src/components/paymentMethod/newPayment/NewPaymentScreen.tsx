import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useSessionStore } from "@/src/store/useSessionStore";
import PaymentMethodSelector from "./PaymentMethodSelector";
import PaymentForm from "./PaymentForm";
 
import { payment_MethodType } from "@/src/types/payment/VisaSuperVisa";
import { AddPaymentMethod } from "@/src/mutations/payments/AddPaymentMethod";
import { useCustomToast } from "@/src/hooks/useCustomToast";
import { PaypalType } from "@/src/types/payment/PayPal";
import { PaymentMethod } from "@/src/types/schema/enums";

const NewPaymentScreen: React.FC = () => {
  const { session } = useSessionStore();
  const userId = session?.id;
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const addPayPalPaymentMethod = AddPaymentMethod();
  const addPaymentMethod = AddPaymentMethod();

  const showToast = useCustomToast();
  const handleSubmitPyPal = (data: PaypalType) => {
    setLoading(true);
    const paymentData = {
      user_id: userId || "",
      method_type: paymentMethod,
      acount_name: data.account_name,
      phone_number: data.phone_number,
      email: data.email,
    };

    try {
       addPayPalPaymentMethod.mutateAsync(paymentData);
      setLoading(false);
      showToast("Payment Has Been Added!", { type: "success" });

      router.replace("/payments");
    } catch (error) {
      console.error(error);
      setLoading(false);
      showToast("Sory! some be problem", { type: "warning" });
    }
  };

  const handleSubmitVisaSuperVisa = async (data: payment_MethodType) => {
    setLoading(true);
    if (
      !paymentMethod ||
      (paymentMethod !== 'Visa' &&
        paymentMethod !== 'Super Visa')
    ) {
      console.error("Invalid payment method");
      setLoading(false);
      return;
    }
    const paymentData = {
      user_id: userId || "",
      method_type: paymentMethod,
      card_number: data.card_number,
      expire_date: data.expire_date ,
      card_cvc: data.card_cvc ,
    };

    try {
      await addPaymentMethod.mutateAsync(paymentData);
      setLoading(false);
      showToast("Payment Has Been Added!", { type: "success" });

      router.replace("/payments");
    } catch (error) {
      console.error(error);
      setLoading(false);
      showToast("Sory! some be problem try agine ", { type: "warning" });
    }
  };
 
  return (
    <View style={styles.container}>
      {!paymentMethod && (
        <PaymentMethodSelector setPaymentMethod={setPaymentMethod} />
      )}
      {paymentMethod && (
        <>
          <TouchableOpacity
            onPress={() => setPaymentMethod(null)}
          ></TouchableOpacity>
          <Text style={styles.subtitle}>Enter {paymentMethod} Data</Text>
          <PaymentForm
            handleSubmitVisaSuperVisa={handleSubmitVisaSuperVisa}
            handleSubmitPyPal={handleSubmitPyPal}
            loading={loading}
            paymentMethod={paymentMethod}
          />
        </>
      )}
    </View>
  );
};

export default NewPaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 22,
    backgroundColor: "#F2F2F2",
  },
  subtitle: {
    fontSize: 20,
    marginTop: 40,
    alignSelf: "center",
    color: "#000",
    marginBottom: 10,
  },
});
