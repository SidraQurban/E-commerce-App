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
          // justifyContent: "space-between",
          padding: 10,
          height:responsiveHeight(22),
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity onPress={handlePress} style={{marginTop:responsiveHeight(7)}}>
          <MaterialCommunityIcons
            name={checked ? "checkbox-outline" : "checkbox-blank-outline"}
            color={checked ? "green" : "black"}
            size={25}
          />
        </TouchableOpacity>
        <View
          style={{
            marginTop:responsiveHeight(0.5),
            height: responsiveHeight(18),
            width: responsiveWidth(30),
            borderRadius:responsiveHeight(1),
            backgroundColor: "grey",
            marginLeft:responsiveWidth(5)
          }}
        >
          <Image
            source={require("../../assets/blush.png")}
            style={{
              resizeMode: "contain",
              height: responsiveHeight(20),
              width: responsiveWidth(20),
              alignSelf: "center",
            }}
          />
        </View>

        <Text>Blush On</Text>
        <TouchableOpacity>
          <MaterialIcons name="delete" size={25} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CartItem