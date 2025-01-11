import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {MaterialCommunityIcons} from "react-native-vector-icons"

const CartItem = () => {
  const [checked, setChecked] = useState(false);
  const handlePress = () => {
    setChecked(!checked);
  }
  
  return (
    <View>
     <TouchableOpacity onPress={handlePress}>
      <MaterialCommunityIcons
       name={checked ? "checkbox-outline" : "checkbox-blank-outline"}
       color = {checked ? "green" : "black"}
       size={25}/>
     </TouchableOpacity>
    </View>
  )
}

export default CartItem