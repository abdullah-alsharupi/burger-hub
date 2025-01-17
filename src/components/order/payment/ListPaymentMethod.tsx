import React from "react";
import {
  PaymentMethodsResponse,
  PaymentMethodVisa,
} from "@/src/types/validations/Payments";
 import { useCartStore } from "@/src/store/cart/cartStore";
 import Visa from "../../ui/PaymentCard/Visa";
 import { ScrollView, View } from "react-native";
import { PaymentMethod } from "@/src/types/schema/enums";
import Cash from "../../ui/PaymentCard/Cash";
import { Dimensions } from "react-native";
const { height } = Dimensions.get("screen");

type Prop = {
  dataPayments: PaymentMethodsResponse;
};

const ListPaymentMethod = ({ dataPayments }: Prop) => {
  const { setPayment, cart } = useCartStore();

  const handlePaymentSelect = (id: number, paymentType: PaymentMethod) => {
    setPayment(id, paymentType);
  };

  const renderPaymentMethod = (payment: PaymentMethodVisa) => {
    const { id, method_type } = payment;

    switch (method_type) {
      default:
        return null;
    }
  };

  return (
    <View style={{height:height * 0.5}}>
    <ScrollView >  

      <Cash 
       selectedPaymentType={cart?.paymentType}
       onClick={()=>{handlePaymentSelect( 0 ,'Cash') }}
       
       />
      {dataPayments.payment_method_visa_super_visa?.map((payment) => (
        <Visa
          key={payment.id}
          onClick={() => handlePaymentSelect(payment.id, payment.method_type)}
          selectedPaymentType={cart?.paymentType}
          paymentMethode={payment}
          selectedPaymentID={cart?.paymentId ?? null}
        />
      ))}
      {dataPayments.payment_method_visa_super_visa?.map(renderPaymentMethod)}

      </ScrollView>
    </View>
  );
};

export default ListPaymentMethod;
