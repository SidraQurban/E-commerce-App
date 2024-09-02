import { View, Text } from "react-native";
import React from "react";

const Products = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>For You</Text>
        <Text>Shop for more</Text>
      </View>
    </View>
  );
};

export default Products;
