import { StyleSheet, Text, View } from "react-native";

const deliveryAddress = () => {
  return (
    <View>
      <View style={styles.deliveryAddress}>
        <Text style={styles.label}>Delivery address</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 1,
  },
  deliveryAddress: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "97%",
    marginTop: 30,
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  changeLink: {
    color: "#F47B0A",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});

export default deliveryAddress;
