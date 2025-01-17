import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.head}>
      <MaterialIcons name="swipe-left" size={20} color="black" />

      <Text style={styles.instruction}>Swipe on an item to delete</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  instruction: {
    textAlign: "left",
    marginBottom: 20,
    fontSize: 18,
    color: "#555",
    display: "flex",
    height: 50,
  },
  head: {
    height: 50,
    width: "78%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "auto",
    marginVertical: 20
  },
});

export default Header;
