import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { usePathname, router } from "expo-router";
import { usesearchStore } from "@/src/store/search/searchStore";
import Input from "./input";

const SearchInput: React.FC<{ color?: string; backgroundColor?: string }> = ({
  color = "#333",
  backgroundColor = "white",
}) => {
  const pathname = usePathname();
  const { searchTerm, setSearchTerm, clearSearchTerm, setProductsOfSearch } =
    usesearchStore();
  const [searchAuto, setSearchAuto] = useState(true);
  console.log("im her in search", pathname.startsWith("/product/search"));

  const handleSearchPress = () => {
    if (pathname.startsWith("/product/search")) {
      console.log("im her in search", pathname.startsWith("/product/search"));
    } else {
      router.push(`/product/search`);
      setProductsOfSearch([]);
    }
  };
  useEffect(() => {
    if (searchTerm) {
      setSearchAuto(false);
      
    } else {
      console.log("im searchTerm ", searchTerm);
      setSearchAuto(true);
    }
  }, [searchTerm]);
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Input
        label=""
        secureTextEntry={false}
        style={styles.input}
        placeholder={"Search..."}
        placeholderTextColor={"black"}
        searchBox={searchAuto}
        onChangeText={setSearchTerm}
        border
        onPress={handleSearchPress}
        autoFocus={pathname.startsWith("/product/search")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 64,
    borderRadius: 70,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "red",
  },
  input: {
    fontSize: 16,
    marginTop: 2,
    margin: 15,
    marginBottom: 5,
    width: "80%",
    borderWidth: 0,
    left: 30,
  },
});

export default SearchInput;
