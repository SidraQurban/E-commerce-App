import { View, Text, TouchableOpacity, Image, RefreshControl, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {MaterialCommunityIcons,Entypo, AntDesign, Ionicons} from "react-native-vector-icons"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const CartItem = () => {

  const [noteCount, setNoteCount] = useState(1);

  const handleIncrement = () => {
    setNoteCount(noteCount + 1);
  };

  const handleDecrement = () => {
    if (noteCount > 0) {
      setNoteCount(noteCount - 1);
    }
  };
  
  return (
    <View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            height: responsiveHeight(22),
          }}
        >
          {/* p.Image */}
          <View
            style={{
              marginTop: responsiveHeight(2.5),
              height: responsiveHeight(20),
              width: responsiveWidth(35),
              borderRadius: responsiveHeight(1),
              backgroundColor: "#e9ecef",
              marginLeft: responsiveWidth(5),
            }}
          >
            <Image
              source={require("../../assets/skirt.png")}
              style={{
                resizeMode: "contain",
                height: responsiveHeight(25),
                width: responsiveWidth(20),
                alignSelf: "center",
              }}
            />
          </View>
          {/* p.name */}
          <Text
            style={{
              marginTop: responsiveHeight(3.6),
              marginLeft: responsiveWidth(3),
              fontSize: responsiveFontSize(2),
              fontWeight: "bold",
            }}
          >
            Blush On
          </Text>
        </View>
        <View>
          {/* Price */}
          <Text
            style={{
              marginLeft: responsiveWidth(52),
              marginTop: responsiveHeight(-13),
              fontSize: responsiveFontSize(1.9),
              fontWeight: "bold",
            }}
          >
            Rs. 1,490
          </Text>
        </View>
        {/* Quantity */}
        <View
          style={{
            flexDirection: "row",
            marginLeft: responsiveWidth(52),
            marginTop: responsiveHeight(-2),
          }}
        >
          {/* increament */}
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderColor: "grey",
              borderWidth: 1,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              width: 22,
              height: 22,
            }}
            onPress={handleIncrement}
          >
            <Ionicons name="add" size={20} color="black" />
          </TouchableOpacity>
          {/* num */}
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              fontWeight: "bold",
              marginLeft: responsiveWidth(2),
            }}
          >
            {noteCount}
          </Text>
          {/* Decrement */}
          <TouchableOpacity
            style={{
              marginLeft: responsiveWidth(2.5),
              backgroundColor: "#fff",
              borderColor: "grey",
              borderWidth: 1,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              width: 22,
              height: 22,
            }}
            onPress={handleDecrement}
          >
            <AntDesign name="minus" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {/* Cancel */}
        <TouchableOpacity
          style={{
            marginLeft: responsiveWidth(89),
            marginTop: responsiveHeight(-2),
          }}
        >
          <Entypo name="cross" size={20} color="black" />
        </TouchableOpacity>
      </ScrollView>
      
    </View>
  );
}

export default CartItem;