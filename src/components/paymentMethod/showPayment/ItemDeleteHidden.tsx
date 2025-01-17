import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
 
type Props = {
     
    onClick:()=> void
};
const ItemsHidden = ({onClick}:Props) => {
 
  return (
    <View style={styles.hiddenContainer}>
    <TouchableOpacity style={styles.hiddenText} onPress={onClick}>
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