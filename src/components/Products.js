import { View, Text } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { TouchableOpacity } from "react-native";

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
            backgroundColor: "blue",
          }}
        >
          <View
            style={{ backgroundColor: "red", height: responsiveHeight(18) }}
          >
            <Text>Hi</Text>
          </View>
          <View>
            <Text>Product</Text>
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
