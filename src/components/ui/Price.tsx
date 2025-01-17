import React from 'react'
import { Text } from 'react-native'
type props={
    price ?:number
}
const Price = ({price}:props) => {
    return (
        <Text style={{
          color:'#AF042C',
          fontSize:18,
          fontWeight:'bold'
          }}>${price}</Text>
      )
}

export default Price