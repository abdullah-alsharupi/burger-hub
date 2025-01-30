import React from "react";
import { Platform } from "react-native";
import { router, Stack } from "expo-router";
import { HeaderBackButton } from "@react-navigation/elements";
import Header from "@/src/components/ui/Header";
import AddproductsFavorite from "@/src/components/product/details/AddProductFavorite";
import { ProductDetailsScreen } from "@/src/components/product/details/ProductDetailsScreen";

const ProductsDetails = () => {
  console.log("product details screene")
  return (
    <>
      <Header
        title=""
        backgroundColorCode="#F2F2F2"
        headerRight={<AddproductsFavorite />}
      />

      <ProductDetailsScreen />
    </>
  );
};

export default ProductsDetails;
