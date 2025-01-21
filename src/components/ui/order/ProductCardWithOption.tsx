import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useCartStore } from "@/src/store/cart/cartStore";
import { Dimensions } from "react-native";
import { Product } from "@/src/types/product/Product";
import ListOption from "./ListOption";
import ListModifier from "./ListModifier";
import ModelSetNote from "../../order/confirmation/ModelSetNote";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

type Props = {
  item: Product;
  children?: React.ReactNode;
  confirmation?: boolean;
};

const ProductCardWithOption: React.FC<Props> = ({
  item,
  children,
  confirmation,
}) => {
  return (
    <View style={styles.card}>
      <Image
       src={`${item.imageurl}`}
        style={styles.image}
      />
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {confirmation && `${item?.quantity}x`}{item.name}
          </Text>
          <Text style={styles.price}>${item.price}</Text>

          {item?.options?.map((option) => (
            <>
              <ListOption name={option?.modifierName} />
              {option?.modifireOptions?.map((modifiers) => (
                <ListModifier
                  name={modifiers?.modifierOptionName}
                  price={modifiers?.modifierOptionPrice}
                />
              ))}
            </>
          ))}
        </View>
        <View style={{ bottom: -10 }}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    width: windowWidth * 0.9,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginRight: 15,
    marginTop: 10,
  },
  textContainer: {
    top: -1,
    width:100,
   },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
  price: {
    color: "#AF042C",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#AF042C",
    borderRadius: 15,
    justifyContent: "flex-end",
    width: 68,
    height: 30,
  },
  quantityButton: {
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    color: "#FFFFFF",
  },
  quantity: {
    fontSize: 11,
    color: "#FFFFFF",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    top: -5,
  },
  desc2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    left: 10,
  },
});

export default ProductCardWithOption;
