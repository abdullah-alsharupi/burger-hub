import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const Header = () => {
  return (
    <View style={styles.head}> 
<FontAwesome6 name="hand-pointer" size={20} color="black" />
        <Text style={styles.instruction}> 
                     Press on an address to select</Text>
       </View>    )
}

const styles = StyleSheet.create({
    instruction: {
        textAlign: 'left',
        marginBottom: 20,
        fontSize: 18,
        color: '#555',
        display:'flex',
        height:50,
             

     },
     head:{
       height:50,
       width:'80%',
        display:'flex',
       flexDirection:'row',
       justifyContent:'space-around',
       margin:'auto',
       marginVertical:10,
       }
});

export default Header