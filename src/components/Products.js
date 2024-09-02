import { View, Text } from "react-native";
import React from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";
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
            Shop for more
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Products;
