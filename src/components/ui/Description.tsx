import React from 'react'
import { Text } from 'react-native'
type props={
    description?:string;

}
const Description = ({description}:props) => {
    return (
        <Text style={{
          color:'#000000',
          fontSize:14,
          opacity:0.6,
          lineHeight:20         }}>
 {description}
           </Text>
      )
}

export default Description