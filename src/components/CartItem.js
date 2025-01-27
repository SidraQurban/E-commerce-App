import { View, Text, TouchableOpacity, Image, RefreshControl, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {MaterialCommunityIcons,MaterialIcons, AntDesign, Ionicons} from "react-native-vector-icons"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const CartItem = () => {
  const [checked, setChecked] = useState(false);
  const handlePress = () => {
    setChecked(!checked);
  }
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
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderColor: "grey",
              borderWidth: 1,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              width: 23,
              height: 23,
            }}
            onPress={handleDecrement}
          >
            <AntDesign name="minus" color="red" size={20} />
          </TouchableOpacity>
          <Text>1</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default CartItem;