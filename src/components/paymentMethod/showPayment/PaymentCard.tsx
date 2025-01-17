import React from "react";
import { TouchableOpacity, Text, Animated, View, Image } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../ui/styles";
import { PaymentCardProps } from "../../../types/types";

const PaymentCard: React.FC<PaymentCardProps> = ({
  method,
  translateX,
  isSwiped,
  handleSwipe,
  handleDelete,
}) => {
  const translateValue = translateX[method.id] || new Animated.Value(0);

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateValue } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      handleSwipe(method.id, event.nativeEvent.translationX);
    }
  };

  const handleTouchStart = () => {
    for (const key in translateX) {
      //@ts-ignore
      if (key !== method.id) {
        translateX[key].setValue(0);
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
      onBegan={handleTouchStart}
    >
      <Animated.View
        style={[styles.card, { transform: [{ translateX: translateValue }] }]}
        key={method.id}
      >
        <TouchableOpacity style={styles.cardContent}>
          {method.method_type === "Visa" ? (
            <Image
              source={require("@/assets/icons/visa.png")}
              style={styles.icon}
            />
          ) : method.method_type === "Super Visa" ? (
            <Image
              source={require("@/assets/icons/mastercard.png")}
              style={styles.icon}
            />
          ) : null}

          <View style={styles.details}>
            <Text style={styles.type}>{method.method_type}</Text>
            <Text style={styles.lastFour}>
              {method.card_number
                ? `**** **** **** ${method.card_number?.slice(-4)}`
                : "**** **** **** ****"}
            </Text>
          </View>
        </TouchableOpacity>

        {isSwiped[method.id] && (
          <TouchableOpacity
            style={styles.deleteIcon}
            onPress={() => handleDelete(method.id, method.method_type || "")}
          >
            <Icon name="trash" size={30} color="red" />
          </TouchableOpacity>
        )}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default PaymentCard;
