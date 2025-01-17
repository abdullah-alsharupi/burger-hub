import { useSessionStore } from "@/src/store/useSessionStore";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useGetAddressbyId } from "@/src/queries/users/getAddressbyId";
import { Row } from "@/src/services/supabase/table.types";
import CardAddress from "./CardAddress";
import { router } from "expo-router";
import { useAddressStore } from "@/src/store/address/useaddressStore";
const { height, width } = Dimensions.get("screen");
export type addressRow = Row<"addresses">;
type Prop = {
  addressId?: string;
  change?: boolean;
};

const ConnectedCardAddress = ({ addressId , change = false }: Prop) => {
  const [address, setAddress] = useState<addressRow | null>(null);
  const { session } = useSessionStore();
  const { data, error, isLoading } = useGetAddressbyId(addressId as string);

  return (
    <View>
      <View style={styles.deliveryAddress}>
        <Text style={styles.label}>Delivery address</Text>
        {change && (
          <TouchableOpacity onPress={() => router.navigate("/SelectAdress")}>
            <Text style={styles.changeLink}>change</Text>
          </TouchableOpacity>
        )}
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#AF042C" />
      ) : error ? (
        <Text>Error loading address</Text>
      ) : (
        data && <CardAddress data={data} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "red",
    borderRadius: 20,
    elevation: 1,
  },
  deliveryAddress: {
    marginBottom: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    width: width * 0.8,
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

export default ConnectedCardAddress;
