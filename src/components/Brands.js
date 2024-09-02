import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { brandsLogo } from "../Constant";

const Brands = () => {
  const handlePress = (url) => {
    Linking.openURL(url).catch((err) => {
      console.log("Failed to open URL: ", err);
    });
  };
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
            <TouchableOpacity
              key={logo.id}
              onPress={() => handlePress(logo.url)}
            >
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
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Brands;
