import { View, Text, Image } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Carousel from "pinar";

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
      <View style={{ alignItems: "center", marginTop: responsiveHeight(2) }}>
        <Carousel
          style={{
            height: responsiveHeight(30),
            width: responsiveWidth(90),
          }}
        >
          {images.map((img) => (
            <Image
              style={{ height: "100%", width: "100%", resizeMode: "cover" }}
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
