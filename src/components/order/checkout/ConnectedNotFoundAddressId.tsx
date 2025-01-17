import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Button from "../../ui/Button";
import { router } from "expo-router";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ConnectedNotFoundAddressId = () => {
  return (
    <View>
      <View style={styles.deliveryAddress}>
        <Text style={styles.label}>Delivery address</Text>
      </View>

     { <View
        style={{
          display: "flex",
          flexDirection: "row",

          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/icons/Location.png")}
          style={{ width: 40, height: 35 }}
        />
        <Text style={{ fontSize: 28, fontWeight: "600", width: 200, top: -5 }}>
          No Address yet
        </Text>
      </View>}
      <Button
        title="Select  Address"
        size="medium"
        color="red"
        onClick={() => {
          router.navigate("/(drawer)/SelectAdress");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  changeLink: {
    color: "#F47B0A",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  deliveryAddress: {
    marginBottom: 20,
    justifyContent: "space-between",
    flexDirection: "column",
    width: "97%",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
export default ConnectedNotFoundAddressId;
