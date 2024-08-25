import { View, Text } from "react-native";
import React from "react";
import images from "./../Constant";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { SliderBox } from "react-native-image-slider-box";

const Deals = () => {
  return (
    <View style={{ padding: responsiveWidth(4), top: responsiveHeight(-13) }}>
      <View>
        <SliderBox images={images} dotColor="purple" inactiveDotColor="red" />
      </View>
    </View>
  );
};

export default Deals;
