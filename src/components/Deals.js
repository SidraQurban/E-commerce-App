import { View, Text } from "react-native";
import React from "react";
import { responsiveWidth } from "react-native-responsive-dimensions";

const Deals = () => {
  return (
    <View style={{ padding: responsiveWidth(4) }}>
      <Text>Deals</Text>
    </View>
  );
};

export default Deals;
