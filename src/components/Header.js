import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { Fontisto, Feather } from "react-native-vector-icons";

const Header = () => {
  return (
    <View
      style={{
        top: responsiveHeight(-4),
        padding: responsiveWidth(4),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{
            height: responsiveHeight(20),
            width: responsiveWidth(30),
            resizeMode: "contain",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity style={{ marginRight: responsiveWidth(6) }}>
            <Fontisto
              name="bell"
              size={25}
              style={{ top: responsiveHeight(1.75) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: responsiveHeight(7),
              width: responsiveHeight(7),
              borderRadius: responsiveHeight(1.5),
              backgroundColor: "#ced4da",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="shopping-cart" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
