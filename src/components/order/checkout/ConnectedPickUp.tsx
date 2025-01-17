import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ConnectedPickUp = () => {
  return (
    <View>
      <View style={styles.Pickup}>
        <Text style={styles.label}>Pickup On Store.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Pickup: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "97%",
    marginTop: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 0,
  },
});

export default ConnectedPickUp;
