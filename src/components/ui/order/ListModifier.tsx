import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type  Props = {
    name :string;
    price:number
    
}
const ListModifier = ({price,name}:Props) => {
  return (
    <TouchableOpacity
    style={styles.desc2}
 >
 <Text>{name}</Text>

   <Text style={{ color: "#AF042C" }}>
     ${price || 0}
     
   </Text>
 </TouchableOpacity>  )
}



const styles = StyleSheet.create({
   desc2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    left: 10,
  },
});

export default ListModifier