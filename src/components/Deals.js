// Deals.js
import { View, Image } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Carousel from "pinar";
import { images } from "../Constant";

const Deals = () => {
  return (
    <View style={{ marginVertical: responsiveHeight(2) }}>
      <Carousel
        showsControls={false}
        loop={true}
        autoplay={true}
        height={responsiveHeight(30)}
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
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        {images.map((img) => (
          <Image
            style={{
              borderRadius: 10,
              height: responsiveHeight(25),
              width: "100%",
              resizeMode: "cover",
            }}
            source={img.img}
            key={img.id}
          />
        ))}
      </Carousel>
    </View>
  );
};

export default Deals;
