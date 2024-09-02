import { View, Text, Image } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";

const Products = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}>
          For You
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#4ea8de", fontSize: responsiveFontSize(2) }}>
            Shop more
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: responsiveHeight(25),
            height: responsiveHeight(27),
            borderRadius: responsiveHeight(2),
            backgroundColor: "#f8f9fa",
          }}
        >
          {/* Image */}
          <Image
            source={require("../../assets/blush.png")}
            style={{
              backgroundColor: "#e9ecef",
              height: responsiveHeight(17),
              resizeMode: "contain",
              width: "100%",
            }}
          />
          {/* Product Text  */}
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: responsiveFontSize(2),
                marginTop: responsiveHeight(0.5),
                marginBottom: responsiveHeight(0.5),
              }}
            >
              Pixi Blush on
            </Text>
            {/* Pricing */}
            <View
              style={{
                flexDirection: "row",
                marginBottom: responsiveHeight(0.5),
              }}
            >
              <Text style={{ color: "#6c757d" }}>Rs.1,764</Text>
              <Text
                style={{
                  marginLeft: responsiveWidth(2),
                  color: "#6c757d",
                  height: responsiveHeight(2.4),
                  backgroundColor: "#ced4da",
                }}
              >
                -50%
              </Text>
            </View>
            {/* Product Rating */}
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="star" color="#fcbf49" size={18} />
              <Text style={{ marginLeft: responsiveWidth(2) }}>4.6(127)</Text>
              <Text style={{ marginLeft: responsiveWidth(2) }}> 1.1k sold</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: responsiveHeight(22),
            height: responsiveHeight(29),
            borderRadius: responsiveHeight(2),
            backgroundColor: "blue",
          }}
        >
          <Text>Hi</Text>
        </View>
      </View>
    </View>
  );
};

export default Products;
