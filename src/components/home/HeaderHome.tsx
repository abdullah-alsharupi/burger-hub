import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BarUI from "../ui/BarUi";
import CartIcon from "../ui/CartIcon";

function HeaderHome() {
  return (
    <TouchableOpacity style={styles.container}>
      <BarUI />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "30%",
    width: "80%",
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default HeaderHome;
