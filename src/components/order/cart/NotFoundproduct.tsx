import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const NotFoundproducts = () => {
  return (
    <View style={styles.head}> 
      <Image style={{height:170,width:170}} source={require('@/assets/icons/empty-cart.png')}/>
        <Text style={styles.instruction}>   
              Cart Is Empty.</Text>
                   
                  
    
       </View>    )
}

const styles = StyleSheet.create({
    instruction: {
        textAlign: 'left',
        marginBottom: 20,
        fontSize: 20,
        color: '#555',
        display:'flex',
        height:50,
             

     },
     head:{
       height:250,
       width:'78%',
        display:'flex',
       flexDirection:'column',
       justifyContent:'space-around',
       margin:'auto',
       marginVertical:20,
       alignItems:'center'
      }
});

export default NotFoundproducts








