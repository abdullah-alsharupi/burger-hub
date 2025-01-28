import React from "react";
import { Platform } from "react-native";
import { router, Stack } from "expo-router";
import { HeaderBackButton } from "@react-navigation/elements";
import Header from "@/src/components/ui/Header";
import AddproductsFavorite from "@/src/components/product/details/AddProductFavorite";
import { ProductsDetailsScreen } from "@/src/components/product/details/ProductDetailsScreen";

const ProductsDetails = () => {
  return (
    <>
      <Header
        title=""
        backgroundColorCode="#F2F2F2"
        headerRight={<AddproductsFavorite />}
      />

      <ProductsDetailsScreen />
    </>
  );
};

export default ProductsDetails;
