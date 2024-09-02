import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { brandsLogo } from "../Constant";

const Brands = () => {
  return (
    <View style={{ marginVertical: responsiveHeight(1) }}>
      <View>
        <Text style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}>
          Top Rated Brands
        </Text>
      </View>

      <View
        style={{
          marginTop: responsiveHeight(1),
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {brandsLogo.map((logo) => {
          return (
            <Image
              source={logo.logo}
              key={logo.id}
              style={{
                height: responsiveHeight(11),
                width: responsiveHeight(11),
                borderRadius: responsiveHeight(5.5),
                resizeMode: "cover",
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Brands;
