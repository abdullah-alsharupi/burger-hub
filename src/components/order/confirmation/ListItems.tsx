import { useCartStore } from "@/src/store/cart/cartStore";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from "react-native";
 import { SafeAreaView } from "react-native-safe-area-context";
import Cardproducts from "./CardProduct";
import { products } from "@/src/types/product/Product";
const {height}=Dimensions.get("screen");
const ListItems = () => {
  const { cart } = useCartStore((state) => state);
  const productss: products[] = cart.productss;
  // console.log(cart.productss)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items</Text>
      <SafeAreaView style={{flex:1}}>

      <ScrollView>
        {productss &&
          productss?.map((item) => (
          <Cardproducts item={item} key={item.id}/>
          ))}
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:height*0.3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ListItems;
