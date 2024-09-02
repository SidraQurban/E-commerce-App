import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { brandsLogo } from "../Constant";
import { Linking } from "react-native";

const Brands = () => {
  // Function to handle opening the URL
  const handlePress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
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
        {brandsLogo.map((logo) => (
          <TouchableOpacity
            key={logo.id}
            onPress={() => handlePress(logo.url)} // Pass the URL to the handlePress function
          >
            <Image
              source={logo.logo}
              style={{
                height: responsiveHeight(11),
                width: responsiveHeight(11),
                borderRadius: responsiveHeight(5.5),
                resizeMode: "cover",
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Brands;
