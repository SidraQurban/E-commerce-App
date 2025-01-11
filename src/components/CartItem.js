import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {MaterialCommunityIcons,MaterialIcons} from "react-native-vector-icons"
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const CartItem = () => {
  const [checked, setChecked] = useState(false);
  const handlePress = () => {
    setChecked(!checked);
  }
  
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity onPress={handlePress}>
          <MaterialCommunityIcons
            name={checked ? "checkbox-outline" : "checkbox-blank-outline"}
            color={checked ? "green" : "black"}
            size={25}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/blush.png")}
          style={{
            resizeMode: "contain",
            height: responsiveHeight(20),
            width: responsiveWidth(20),
            
          }}
        />
        <Text>Blush On</Text>
        <TouchableOpacity>
        <MaterialIcons name="delete" size={25} color="red"/>
        
        </TouchableOpacity>
     
      </View>
    </View>
  );
}

export default CartItem