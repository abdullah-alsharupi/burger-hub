import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type  Props = {
    name :string;

}
const ListOption = ({name}:Props) => {
  return (
    <TouchableOpacity
  >
 <Text style={styles.name}>{name}</Text>
  </TouchableOpacity>  )
}



const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default ListOption