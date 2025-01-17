import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
 
const _layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{headerShown:false}} >
        <Stack.Screen name="cart"         options={{
           headerTitleAlign:'center',
        
       
          headerShown:false

        }}/>
        <Stack.Screen name="checkOut"         options={{
       
          headerShown:false
        }}/>
        <Stack.Screen name="orderConfirmation"         options={{
  
          headerShown:false,
        

          
        }}/>
        <Stack.Screen name="payment"         options={{
 
          headerShown:false

 
        }}/>

 

      </Stack>
    </GestureHandlerRootView>
  );
};

export default _layout;



const styles = StyleSheet.create({
    headerTitleContainer: {
      flex:0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      fontSize: 20,  
      fontWeight: 'bold',  
    },
  });