import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  Dimensions,
  ScrollView,
} from "react-native";
import { useGetAddressByUserId } from "@/src/queries/users/useGetAddressbyUserId";
import { useSessionStore } from "@/src/store/useSessionStore";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { addressChane } from "@/src/mutations/user/changeAddress";
import { useCustomToast } from "@/src/hooks/useCustomToast";
import Button from "../ui/Button";
import { formatAddress } from "@/src/util/addressFormat";
import ShowDialog from "../ui/showDialog";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/react-query";
type Props = {
  setOpen: any;
  open: boolean;
  refetch: (
    options?: RefetchOptions & RefetchQueryFilters
  ) => Promise<QueryObserverResult<any, any>>;
};
const { width,height } = Dimensions.get("window");

const AddressChangeScreen = ({ setOpen, open, refetch }: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleCancel = () => {
    setDialogOpen(false);
  };
  const [Id, setId] = useState(Number);
  const { session } = useSessionStore();
  const userId = session?.id;
  const { data: address } = useGetAddressByUserId(userId as string);

  const showToast = useCustomToast();
  const handleSelectAddress = () => {
    console.log(Id)
    addressChane(Id)
      .then(() => {
        refetch();
        showToast("update address successfully", { type: "success" });
        setDialogOpen(false);
      })
      .catch((error) => {
        showToast("Error updating address", { type: "danger" });
      });
  };

  return (
    <ScrollView   style={styles.container}>
      <Modal
        onDismiss={setOpen}
        presentationStyle="overFullScreen"
        transparent
        visible={open}
        animationType="slide"
      >
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
            <FlatList
              data={address}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setId(item.id);
                    setDialogOpen(true);
                  }}
                  style={{ marginBottom: 9 }}
                >
                  <View style={styles.addressItem}>
                    <View
                      style={{
                        width: 56,
                        height: 56,
                        top: 2,
                        borderRadius: 12,
                        backgroundColor: "#FFE3E3",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="map-marker"
                        size={30}
                        color="#DF2C2C"
                        style={{ width: 37, height: 37, top: 12, left: 10 }}
                      />
                    </View>
                    <View style={styles.addressDetails}>
                      {address ? (
                        <Text>{formatAddress({ ...item })}</Text>
                      ) : (
                        <Text>no address</Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            
            <View style={{ position: "absolute", bottom: 5 }}>
              <Button
                color="red"
                size="small"
                title="Close"
                onClick={() => setOpen(false)}
              />
            </View>
            <View style={{alignItems:"center",justifyContent:"center",position:"absolute"}}>{!address?.length&&<Text>no address available</Text>}</View>

          </View>
        </View>
        <ShowDialog
          open={dialogOpen}
          setOpen={setDialogOpen}
          onConfirm={handleSelectAddress}
          onCancel={handleCancel}
          title="Confirm Selection"
          description="Are you sure you want to select this address?"
          trigger={undefined}
        />
      </Modal>
    </ScrollView>
  );
};
export default AddressChangeScreen;
const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalView: {
    position: "absolute",
    display: "flex",
    top: "25%",
    left: "50%",
    height: height*0.5,
    width: width * 0.8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
    backgroundColor: "#F5F5F5",
    borderRadius: 7,
    padding: 30,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 5,
  },
  addressDetails: {
    marginLeft: 8,
    flex: 1,
    opacity: 0.5,
  },
  selectButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});