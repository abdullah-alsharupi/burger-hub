import { Image, StyleSheet, View } from "react-native";
import Tabs from "./Tabs";
import React from "react";

const AuthContainer = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("@/assets/images/logo.png")} // Adjust the path as necessary
            style={styles.image}
            resizeMode="contain" 
          />
        </View>
      </View>
      <Tabs />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "40%",
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    marginTop: "15%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
  },
});
export default AuthContainer;
