import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../../ui/Button";


type Props = {
  visible?: boolean;
  onClose: any;
};

const ConfirmAddress = ({ visible, onClose }: Props) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.dialog}>
          <Text style={styles.title}>Please Select Address</Text>

          <TouchableOpacity style={styles.proceedButton} onPress={onClose}>
            <Button
              title="okey"
              color="red"
              size="medium"
              onClick={() => {
                onClose();
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dialog: {
    width: 300,
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    marginLeft: 12,
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 18,
  },
  proceedButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 60,
    width: 280,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ConfirmAddress;
