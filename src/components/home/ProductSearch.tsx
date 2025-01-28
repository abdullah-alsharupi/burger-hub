import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import SearchInput from "../ui/SearchInput";
import Buttonout from "../ui/Buttonout";
import Homes from "./Home";
import CardWrapper from "../ui/card/CardWrapper";
import NotFound from "../notFound/NotFound";
import { useSearchproducts } from "@/src/queries/products/getbySearch";

const productsearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data: products, isLoading, error } = useSearchproducts(searchTerm);
  const [g, setG] = useState(false);

  const handleSearch = (text: string) => {
    setSearchTerm(text.toLowerCase());
  };

  if (g) {
    return <Homes />;
  }

  if (error) return <Text>Error fetching products.</Text>;

  const handleButtonPress = () => {
    setG(!g);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Buttonout onPress={handleButtonPress} />
        <SearchInput
        //@ts-ignore
        onSearch={handleSearch} />
      </View>

      {isLoading && (
        <ActivityIndicator
          size="large"
          color="red"
          style={styles.loadingIndicator}
        />
      )}

      {products && products.length > 0 ? (
        <>
          <Text style={styles.productsCount}>
            Found {products.length} results
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.content}
          >
            {products.map((item:any) => (
              <CardWrapper
                key={item.id}
                imageSource={{
                  uri:item.imageurl
                }}
                title={item.name || "products Name"}
                price={`$${item.price?.toFixed(2)}`}

                id={item?.id}
              />
            ))}
          </ScrollView>
        </>
      ) : (
        <Text style={styles.t}>
          {searchTerm ? (
            <NotFound
              icon="search"
              message1="Item not found"
              message2="Try searching the item with a different keyword"
            />
          ) : (
            <NotFound icon="search" message1="Search by name" message2="" />
          )}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  t: {
    textAlign: "center",
    marginRight: 10,
  },
  loadingIndicator: {
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "white",
  },
  content: {
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  productsCount: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default productsearch;
