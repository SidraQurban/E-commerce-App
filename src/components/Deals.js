import { View, Text, Image } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Carousel from "pinar";
import { images } from "../Constant";

const Deals = () => {
  return (
    <Carousel
      showsControls={false}
      loop={true}
      activeDotStyle={{
        height: 3,
        width: 25,
        marginHorizontal: 3,
        backgroundColor: "#adb5bd",
        borderRadius: 3,
      }}
      dotStyle={{
        height: 3,
        width: 25,
        marginHorizontal: 3,
        backgroundColor: "#6c757d",
        borderRadius: 3,
      }}
      style={{
        bottom: 80,
        marginBottom: responsiveHeight(32),
      }}
    >
      {images.map((img) => (
        <Image
          style={{
            borderRadius: 10,
            marginLeft: responsiveWidth(2),
            marginRight: responsiveWidth(2),
            marginTop: 10,
            height: responsiveHeight(25),
            width: "96%",
            resizeMode: "cover",
          }}
          source={img.img}
          key={img.id}
        />
      ))}
    </Carousel>
  );
};

export default Deals;
