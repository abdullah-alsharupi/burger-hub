import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import {
  PaymentMethodPayPal,
  PaymentMethodsResponse,
} from "@/src/types/validations/Payments";
import { PaymentType } from "@/src/store/cart/cartSlice";
import Paypal from "../../ui/PaymentCard/Paypal";
import SuperVisa from "../../ui/PaymentCard/SuperVisa";
import Visa from "../../ui/PaymentCard/Visa";
import Header from "../../order/cart/Header";
import ItemsHidden from "./ItemDeleteHidden";
import { PaymentMethod } from "@/src/types/schema/enums";

type Prop = {
  paymentMethods: PaymentMethodsResponse [] |null;
  onClick: (id: string, methodType: PaymentMethod) => void;
};
const ConnectedCardWithSwipeVisa = ({ paymentMethods, onClick }: Prop) => {
  console.log(" in visa",paymentMethods)

  if (paymentMethods?.length == 0 || paymentMethods?.length == undefined)
    return null;
  return (
    <View>
      <SwipeListView
        data={paymentMethods}
        renderItem={({ item }) => (
          <Visa onClick={() => {}} paymentMethode={item} />
        )}
        renderHiddenItem={({ item }) => (
          <ItemsHidden onClick={() => onClick(item.id, item.method_type)} />
        )}
        rightOpenValue={-95}
        keyExtractor={(item) => item.id.toString()}
        disableRightSwipe
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "auto",
  },
  safeArea: {
    width: "100%",
    height: "auto",
  },
});

export default ConnectedCardWithSwipeVisa;
