import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import { PaymentMethodsResponse } from "@/src/types/validations/Payments";
 import Visa from "../../ui/PaymentCard/Visa";
import ItemsHidden from "./ItemDeleteHidden";
import { PaymentMethod } from "@/src/types/schema/enums";

type Prop = {
  paymentMethods: PaymentMethodsResponse[] | null;
  onClick: (id: string, methodType: PaymentMethod) => void;
};

const ConnectedCardWithSwipeSuperVisa = ({ paymentMethods, onClick }: Prop) => {
  console.log("im connect this datapayment", paymentMethods);
  return (
    <>
      {paymentMethods &&
        paymentMethods?.map((payment) => (
          <SwipeListView
            data={[payment.id]}
            renderItem={({ item }) => (
              <Visa onClick={() => {}} paymentMethode={payment} />
            )}
            renderHiddenItem={({ item }) => (
              <ItemsHidden
                onClick={() => onClick(payment.id, payment.method_type)}
              />
            )}
            rightOpenValue={-95}
            keyExtractor={(item) => payment.id.toString()}
            disableRightSwipe
          />
        ))}
    </>
  );
};

export default ConnectedCardWithSwipeSuperVisa;
