import React, {  useState } from 'react'
import {  Dimensions, StyleSheet,View } from 'react-native'
import Button from '../../ui/Button'
import { useCartStore } from '@/src/store/cart/cartStore'
import PresentationCustomize from './Customize/PresentationOptions'
import { router } from 'expo-router'
import { useCustomToast } from '@/src/hooks/useCustomToast'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  type props ={
  data?:any
}
const Buttons = ({data}:props) => {
  const showToast = useCustomToast();

  const {addproducts,cart,getTotalproductss} = useCartStore(state => state);
  const [isPressed, setIsPressed] = useState(false);
  const handlePress =async () => {
    setIsPressed(!isPressed);
// router.navigate('/(screen)/cart')
  };
  const handleAddproducts =async () => {
    console.log("im button and cart store before",cart)
    addproducts({
      id: data?.products?.id,
      imageurl: data?.products?.imageurl,
      name: data?.products?.name,
      price: data?.products?.price,
      quantity: 1,
      options: [],
      note:null
    });
    getTotalproductss();
    showToast("products has been added successfully!", { type: "success" });
    router.back();
  };
   return (
    <View style={{height:windowHeight*0.2,width:350,marginHorizontal:'auto'}}>
    <View style={styles.scop}>
    <Button size='large' color='white' title='Costomize' onClick={handlePress}/>
  </View>
  <View style={styles.scop}>
    <Button size='large' color='red' title='Add to cart' onClick={handleAddproducts}/>
  </View>
  <PresentationCustomize data={data}  isPressed={isPressed} handlePress={handlePress} />
  </View>  )
}
export default Buttons
const styles = StyleSheet.create({
     scop:{height:50,marginTop:20}
})