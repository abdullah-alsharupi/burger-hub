import React from 'react'
import { Dimensions, View } from 'react-native'
import Title from '../../ui/Title'
import Description from '../../ui/Description'
import Price from '../../ui/Price'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type props ={
  title?:string;
  price?:number;
  description?:string;
}
const Presentation = ({title,price,description}:props) => {
  return (
 <View style={{height:windowHeight*0.3,width:"70%",display:'flex',justifyContent:'space-evenly',alignItems:'center',position:'absolute',bottom:0}}>
      <Title name={title} />
    <Description description={description}/>
    <Price price={price}/>
 </View>  )
}

export default Presentation