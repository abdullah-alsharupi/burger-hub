import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useGetAddressByUserId } from "@/src/queries/users/useGetAddressbyUserId";
import { useSessionStore } from "@/src/store/useSessionStore";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../ui/Button";
import Formaddress from "./FormaAddress";
import { addressDelete } from "@/src/mutations/user/addressDelete";
import { formatAddress } from "@/src/util/addressFormat";
import ShowDialog from "../ui/showDialog";
import { useCustomToast } from "@/src/hooks/useCustomToast";
import { SwipeListView } from "react-native-swipe-list-view";
import Header from "../ui/Header";
const { height, width } = Dimensions.get("screen");
const AddressScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const showToast = useCustomToast();
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };
  const { session } = useSessionStore();
  const userId = session?.id;
  const {
    data: address,
    isLoading,
    refetch,
  } = useGetAddressByUserId(userId as string);
  const [addresses, setAddresses] = useState(address || []);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [Id, setId] = useState<number | null>(null);

  useEffect(() => {
    if (address) {
      setAddresses(address);
    }
  }, [address]);

  const handleDeleteAddress = () => {
    if (Id !== null) {
      addressDelete(Id, userId as string)
        .then(() => {
          showToast("Address deleted successfully", { type: "success" });
          setDialogOpen(false);
          refetch();
        })
        .catch(() => {
          showToast("Failed to delete address", { type: "danger" });
        });
    }
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        size={"large"}
        color={"blue"}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      ></ActivityIndicator>
    );
  }

  // if (!addresses.length) {
  //   return (

  //   );

  
  // }



  const renderHiddenItem = (data: any) => (
    <View style={styles.deleteButton}>
      <MaterialCommunityIcons
        name="delete"
        size={24}
        color="white"
        onPress={() => {
          setId(data.item.id);
          setDialogOpen(true);
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={addresses}
        renderItem={({ item }) => (
          <View style={styles.addressItem}>
            <View style={styles.markerContainer}>
              <MaterialCommunityIcons
                name="map-marker"
                size={30}
                color="#DF2C2C"
                style={styles.markerIcon}
              />
            </View>
            <View style={styles.addressDetails}>
              <Text>{formatAddress({ ...item })}</Text>
            </View>
          </View>
        )}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-70} // Width of the delete button
        keyExtractor={(item) => item.id}
      />
      {!address?.length && (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>No addresses available</Text>
        </View>
      )}
      <View style={styles.addButtonContainer}>
        <Button
          color="red"
          size="large"
          title="Add Address"
          onClick={toggleModalVisibility}
        />
      </View>
      <Formaddress
        open={isModalVisible}
        setOpen={toggleModalVisibility}
        refetch={refetch}
      />
      <ShowDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        onConfirm={handleDeleteAddress}
        onCancel={() => setDialogOpen(false)}
        title="Delete Confirmation"
        description="Are you sure you want to delete this address?"
        trigger={undefined}
      />
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f6f7",
  },
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 1,
  },
  markerContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#FFE3E3",
    justifyContent: "center",
    alignItems: "center",
  },
  markerIcon: {
    width: 30,
    height: 30,
  },
  addressDetails: {
    width: 200,
    fontSize: 15,
    fontWeight: "400",
    opacity: 0.5,
    left: 12,
  },
  deleteButton: {
    backgroundColor: "#DF2C2C",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: "50%",
    borderRadius: 50,
    position: "absolute",
    right: 0,
    top: 15,
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 5,
    width: width,
    zIndex: 1,
  },
});
