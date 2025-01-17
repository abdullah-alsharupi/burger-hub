import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import ImageProduct from "./ImageProduct";
import Presentation from "./Presentation";
import Buttons from "./Buttons";
import { useLocalSearchParams } from "expo-router";
import { useGetModifiersWithProduct } from "@/src/queries/products/getModifiersWithProduct";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ProductDetailsScreen = () => {
  console.log("im height and width in cart ", windowWidth, windowHeight);
  const { id } = useLocalSearchParams();
  const numericId = Array.isArray(id) ? Number(id[0]) : Number(id);

  const { data, error, isLoading } = useGetModifiersWithProduct(numericId);
  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#AF042C" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error loading modifiers: {error.message}</Text>
      </View>
    );
  }
  return (
    <>
      <View style={styles.container}>
        {data && (
          <View
            style={{
              display:"flex",
              alignItems: "center",
              width: "95%",
              marginHorizontal: "auto",
              height: windowHeight * 0.6,
              justifyContent: "space-between",
           
            }}
          >
            <ImageProduct imageBase={data?.product.imageurl || ""} />
            <Presentation
              title={data?.product.name || ""}
              description={data?.product.description || ""}
              price={data?.product.price || undefined}
            />
          </View>
        )}

        <Buttons data={data} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowWidth,
    width: windowWidth,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
