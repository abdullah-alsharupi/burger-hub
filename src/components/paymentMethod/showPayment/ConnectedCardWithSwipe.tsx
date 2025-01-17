import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Dimensions, ScrollView } from "react-native";
import {
  PaymentMethodsResponse,
  PaymentMethodVisa,
} from "@/src/types/validations/Payments";
import Header from "../../order/cart/Header";
import ConnectedCardWithSwipeVisa from "./ConnectedCardWithSwipeVisa";
import ConnectedCardWithSwipePaypal from "./ConnectedCardWithSwipePaypal";
import {
  deletePayPalPayment,
  deleteVisaOrSuperVisaPayment,
} from "@/src/queries/products/deletePayment";
 import { ActivityIndicator } from "react-native-paper";
import ShowDialog from "../../ui/showDialog";
import { PaymentMethod } from "@/src/types/schema/enums";

const { height, width } = Dimensions.get("screen");

type Prop = {
  paymentMethods: PaymentMethodsResponse;
  refetch: () => void;
};

const ConnectedCardWithSwipe = ({ paymentMethods, refetch }: Prop) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<{
    id: number;
    methodType: PaymentMethod;
  } | null>(null);

  const handleCancel = () => {
    setDialogOpen(false);
  };

  const handleDeleteMethod = async () => {
    if (selectedMethod) {
      setLoading(true);
      try {
        const { id, methodType } = selectedMethod;
        console.log(`Deleting payment method ID: ${id}`);
        if (
          methodType === "Visa" ||
          methodType === "Super Visa" ||
          methodType === "PayPal"
        ) {
          await deleteVisaOrSuperVisaPayment(id);
        }
        refetch();
      } catch (error) {
        console.error("Error deleting payment method:", error);
      } finally {
        setLoading(false);
        setDialogOpen(false);
        setSelectedMethod(null);
      }
    }
  };


  return (
    <View style={styles.container}>
      {paymentMethods && <Header />}
      <SafeAreaView style={styles.safeArea}>
      <ScrollView>

        {paymentMethods?.payment_method_visa_super_visa && (
          <ConnectedCardWithSwipeVisa
            onClick={(id: number, methodType: PaymentMethod) => {
              setSelectedMethod({ id, methodType });
              setDialogOpen(true);
            }}
            paymentMethods={paymentMethods.payment_method_visa_super_visa}
          />
        )}
        {paymentMethods?.payment_method_visa_super_visa && (
          <ConnectedCardWithSwipeVisa
            onClick={(id: number, methodType: PaymentMethod) => {
              setSelectedMethod({ id, methodType });
              setDialogOpen(true);
            }}
            //@ts-ignore
            paymentMethods={paymentMethods.payment_method_paypal}
          />
        )}
              </ScrollView>

      </SafeAreaView>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#AF042C" />
        </View>
      )}
      <ShowDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        onConfirm={handleDeleteMethod}
        onCancel={handleCancel}
        title="Confirm Deleting"
        description="Are you sure you want to delete this method?"
        trigger={undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    alignSelf: "center",
    height:height *0.5
  },
  safeArea: {
   },
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

export default ConnectedCardWithSwipe;
