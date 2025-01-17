import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useGetAddressByUserId } from "@/src/queries/users/useGetAddressbyUserId";
import { useSessionStore } from "@/src/store/useSessionStore";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NoAddress from "../../address/NoAddress";
import Button from "../../ui/Button";
import Buttonout from "../../ui/Buttonout";
import { router } from "expo-router";
import Header from "./Header";
import { useCartStore } from "@/src/store/cart/cartStore";
 



export default function AddressScreen() {
   const { session } = useSessionStore();
  const { cart ,setAddressId } = useCartStore(state => state);

 
   const userId = session?.id;
  const {
    data: address,
    error,
    refetch,
  } = useGetAddressByUserId(userId as string);
  const [addresses, setAddresses] = React.useState(address || []);

  React.useEffect(() => {
    if (address) {
      setAddresses(address);
    }
  }, [address]);

 
  const setCurrentAddress = (addressId: number) => {
    setAddressId(addressId);
    router.back();
  }
  

  return (
    <View style={styles.container}>
    
     <Header/>
      {!address && <NoAddress/> }
  
      <FlatList
        data={addresses}
        renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.addressItem} onPress={()=> setCurrentAddress(item?.id)} >
            <View  style={styles.icon}>
             <Image
             source={require('@/assets/icons/Location.png')}
             />
            </View>
        <View style={styles.addressDetails}>
        <Text>{item.street}</Text>
  <Text>{`${item.city}, ${item.state}, ${item.zip_code}`}</Text>
  <Text>{item.country}</Text>
        </View>
        </TouchableOpacity> 

         )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={{marginBottom:20}}>
        <Button title="New Address" size="large" color="white" onClick={()=>router.navigate('/Addresses')}/>
      </TouchableOpacity>

     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal:20
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
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
  addressDetails: {
    marginLeft: 8,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: "50%",
    borderRadius: 8,
  },
  addButton: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
  },   
    icon:{
    height:50,
    width:50,
    backgroundColor:'#FFE3E3',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    margin:5

}
});
