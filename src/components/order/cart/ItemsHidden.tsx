import { useCartStore } from '@/src/store/cart/cartStore';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {Dimensions} from 'react-native';
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type products = {
    name: string;
    price: number;
    quantity: number;
    id:string
};
type Props = {
    item: products;
    rowMap: any;
};
const ItemsHidden = ({item,rowMap}:Props) => {
    const { removeproducts } = useCartStore(state => state);

  return (
    <View style={styles.hiddenContainer}>
    <TouchableOpacity style={styles.hiddenText} >
      <AntDesign name="hearto" size={17} color="#f0f0f0" />

    </TouchableOpacity>
    <TouchableOpacity style={styles.hiddenText} onPress={()=>removeproducts(item.id)}>
      <MaterialIcons name="delete-outline" size={20} color="#f0f0f0" />

    </TouchableOpacity>
  </View>  )
}
export default ItemsHidden;
const styles = StyleSheet.create({
 
    
    hiddenContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 70,
        padding: 15,
        width:windowWidth*0.25,
        position:'relative',
         top:12,
         zIndex:99,
         left:windowWidth*0.6,
        },
    hiddenText: {
      backgroundColor:'#DF2C2C',
       borderRadius:50,
      height:'80%',
      width:'45%',
      alignItems:'center',
      justifyContent:'center'
    },
});