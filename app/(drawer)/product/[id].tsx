import React from "react";
import { Platform } from "react-native";
import { ProductDetailsScreen } from "@/src/components/product/details/ProductDetailsScreen";
import { router, Stack } from "expo-router";
import { HeaderBackButton } from "@react-navigation/elements";
import AddProductFavorite from "@/src/components/product/details/AddProductFavorite";
import Header from "@/src/components/ui/Header";

const ProductDetails = () => {
  return (
    <>
      <Header
        title=""
        backgroundColorCode="#F2F2F2"
        headerRight={<AddProductFavorite />}
      />

      <ProductDetailsScreen />
    </>
  );
};

export default ProductDetails;
