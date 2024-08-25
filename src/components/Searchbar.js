import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";

const Searchbar = () => {
  return (
    <View
      style={{
        padding: responsiveWidth(4),
        top: responsiveHeight(-12),
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: responsiveHeight(6.5),
          width: responsiveHeight(40),
          borderColor: "#000",
          borderWidth: 1,
          borderRadius: responsiveHeight(2),
          paddingLeft: responsiveWidth(4),
        }}
      >
        <Ionicons name="search" size={20} style={{ marginRight: 10 }} />
        <TextInput placeholder="Search here" placeholderTextColor="#000" />
      </View>
      <TouchableOpacity
        style={{
          height: responsiveHeight(6.5),
          width: responsiveHeight(6.5),
          borderRadius: responsiveHeight(2),
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name="line-scan" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;
