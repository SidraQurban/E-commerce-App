import { View, Text } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Carousel from "pinar";
// import { images } from "../Constant";
import { Image } from "react-native";

const images = [
  {
    id: 1,
    img: require("../../assets/image1.png"),
  },
  {
    id: 2,
    img: require("../../assets/image2.png"),
  },
  {
    id: 3,
    img: require("../../assets/image3.png"),
  },
];
const Deals = () => {
  return (
    <View>
      <View>
        <Carousel
          style={{
            height: responsiveHeight(30),
            width: responsiveWidth(90),
          }}
        >
          {images.map((img) => (
            <Image
              style={{ height: "80%", width: "80%" }}
              source={img.img}
              key={img.id}
            />
          ))}
        </Carousel>
      </View>
    </View>
  );
};

export default Deals;
