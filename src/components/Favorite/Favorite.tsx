import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import NotFound from "@/src/components/notFound/NotFound";
import CardWrapper from "../ui/card/CardWrapper";
import { useGetFavoriteProductsByUserId } from "@/src/queries/products/getFavorite";
import { useSessionStore } from "@/src/store/useSessionStore";
import { useFocusEffect } from "expo-router";

const { width } = Dimensions.get("screen");
const Favorites = () => {
  const { session } = useSessionStore();
  const id = session?.id;
  const {
    data: favoriteProducts,
    isLoading,
    error,
    refetch,
  } = useGetFavoriteProductsByUserId(id as string);
  console.log(session?.id)

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="red" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const handlePress = () => {
    console.log("ok");
  };

  return (
    <View style={styles.content}>
      {favoriteProducts && favoriteProducts.length > 0 ? (
        <ScrollView>
          <View style={styles.cardContainer}>
            {favoriteProducts.map((product) => (
              <CardWrapper
                key={product.id}
                imageSource={{
                  uri: product.imageurl || "http://example.com/default-image.jpg",
                }}
                title={product.name || "Product Name"}
                price={`$${product.price?.toFixed(2)}`}
                id={product.id}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <Text style={styles.noProductsText}>
          <NotFound
            icon="heart-o"
            message1="No favorites"
            message2="Choose your favorite items by hitting the heart"
            buttonTitle="Start browsing"
            onButtonPress={handlePress}
          />
        </Text>
      )}
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  content: {
    width: width,
    marginVertical: 16,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", 
  },
  noProductsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
  },
});