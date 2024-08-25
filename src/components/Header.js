import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { Fontisto, Feather } from "react-native-vector-icons";

const Header = () => {
  return (
    <View style={{ top: responsiveHeight(-6), padding: responsiveWidth(4) }}>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Fontisto name="bell" size={20} />
          <Feather name="shopping-cart" size={20} />
        </View>
      </View>
    </View>
  );
};

export default Header;
