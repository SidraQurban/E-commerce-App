import { View, Text } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Brands = () => {
  return (
    <View style={{ bottom: responsiveHeight(40) }}>
      <Text>Brands</Text>
    </View>
  );
};

export default Brands;
