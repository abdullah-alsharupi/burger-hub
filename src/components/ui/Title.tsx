import React from 'react'
import { Text } from 'react-native'
type props ={
  name?:string;
}
const Title = ({name}:props) => {
  return (
    <Text style={{
      color:'#000000',
      fontSize:22,
      fontWeight:600
    }}>{name}</Text>
  )
}

export default Title