import { View, Text, Image } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Brands = () => {
  return (
    <View style={{ marginVertical: responsiveHeight(1) }}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}>
          Top Rated Brands
        </Text>
        <Text style={{ color: "#4ea8de", fontSize: responsiveFontSize(2) }}>
          View all
        </Text>
      </View>
      <View
        style={{
          top: -2,
          borderColor: "#4ea8de",
          marginLeft: responsiveWidth(80),
          height: 1,
          width: responsiveWidth(14),
          borderWidth: 1,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../../assets/khaadi.png")}
          style={{
            height: responsiveHeight(12),
            width: responsiveHeight(12),
            borderRadius: responsiveHeight(6),
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../../assets/ideas.png")}
          style={{
            height: responsiveHeight(12),
            width: responsiveHeight(12),
            borderRadius: responsiveHeight(6),
            resizeMode: "cover",
          }}
        />

        <Image
          source={require("../../assets/j..png")}
          style={{
            height: responsiveHeight(12),
            width: responsiveHeight(12),
            borderRadius: responsiveHeight(6),
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../../assets/ga.png")}
          style={{
            height: responsiveHeight(12),
            width: responsiveHeight(12),
            borderRadius: responsiveHeight(6),
            resizeMode: "cover",
          }}
        />
      </View>
    </View>
  );
};

export default Brands;
