import { useCartStore } from "@/src/store/cart/cartStore";
 import { Product } from "@/src/types/product/Product";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from "react-native";
 import { SafeAreaView } from "react-native-safe-area-context";
import CardProduct from "./CardProduct";
const {height}=Dimensions.get("screen");
const ListItems = () => {
  const { cart } = useCartStore((state) => state);
  const products: Product[] = cart.products;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items</Text>
      <SafeAreaView style={{flex:1}}>

      <ScrollView>
        {products &&
          products.map((item) => (
          <CardProduct item={item} key={item.id}/>
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
