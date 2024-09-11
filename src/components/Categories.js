import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Categories = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            gap: responsiveWidth(2),
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: responsiveHeight(2),
              width: responsiveHeight(15),
              height: responsiveHeight(5),
              backgroundColor: "red",
            }}
          >
            <Text>Category 1</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: responsiveHeight(2),
              width: responsiveHeight(15),
              height: responsiveHeight(5),
              backgroundColor: "red",
            }}
          >
            <Text>Category 1</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: responsiveHeight(2),
              width: responsiveHeight(15),
              height: responsiveHeight(5),
              backgroundColor: "red",
            }}
          >
            <Text>Category 1</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
