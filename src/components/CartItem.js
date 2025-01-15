import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {MaterialCommunityIcons,MaterialIcons} from "react-native-vector-icons"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

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
          height: responsiveHeight(22),
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity
          onPress={handlePress}
          style={{ marginTop: responsiveHeight(7) }}
        >
          <MaterialCommunityIcons
            name={checked ? "checkbox-outline" : "checkbox-blank-outline"}
            color={checked ? "green" : "black"}
            size={25}
          />
        </TouchableOpacity>
        {/* p.Image */}
        <View
          style={{
            marginTop: responsiveHeight(2.5),
            height: responsiveHeight(15),
            width: responsiveWidth(30),
            borderRadius: responsiveHeight(1),
            backgroundColor: "#cccccc",
            marginLeft: responsiveWidth(5),
          }}
        >
          <Image
            source={require("../../assets/blush.png")}
            style={{
              resizeMode: "contain",
              height: responsiveHeight(15),
              width: responsiveWidth(20),
              alignSelf: "center",
            }}
          />
        </View>
        {/* p.name */}
        <Text
          style={{
            marginTop: responsiveHeight(6),
            marginLeft: responsiveWidth(3),
            fontSize: responsiveFontSize(2),
          }}
        >
          Blush On
        </Text>
        <TouchableOpacity
          style={{
            marginLeft: responsiveWidth(28),
            marginTop: responsiveHeight(5),
          }}
        >
          <MaterialIcons name="delete" size={25} color="red" />
        </TouchableOpacity>
      </View>
      <View>
        {/* Price */}
        <Text>Rs. 1,490</Text>
        <Text>helllo</Text>      
      </View>
    </View>
  );
}

export default CartItem