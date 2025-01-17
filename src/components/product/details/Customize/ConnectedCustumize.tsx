import Button from "@/src/components/ui/Button";
import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
type ModalProps = {
    children?: React.ReactNode;
    isPressed: boolean;
    handlePress: () => void;
    handleOnClickSave?: () => void;
   };
const ConnectedCustumize = ({handleOnClickSave,children,isPressed,handlePress}:ModalProps) => {

  return (
    <View>
      <Modal
        isVisible={isPressed}
        animationInTiming={1000}
        avoidKeyboard={true}
        onBackButtonPress={handlePress}
        onBackdropPress={handlePress}
        style={{ marginTop: 50 }}
      >
        <View style={{ backgroundColor: '#F6F6F9', height: 480 ,paddingBottom:30}}>
          <SafeAreaView style={{ flex: 1, alignItems: "flex-start", justifyContent: "center",marginLeft:30 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                {children}
            </ScrollView>
          </SafeAreaView>
          <Button color="red"
                  title="save"
                  size="small" 
                  onClick={() => {
                   if (handleOnClickSave) {handleOnClickSave();};
                      }}/>

        </View>
      </Modal>
    </View>  )
}

export default ConnectedCustumize