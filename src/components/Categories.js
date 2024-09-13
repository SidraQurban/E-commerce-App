import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { TouchableOpacity } from "react-native";
import { categoryData } from "../Constant";

const Categories = () => {
  const [active, setActive] = useState();
  const handlePress = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: responsiveHeight(1) }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: responsiveWidth(2.5),
          }}
        >
          {categoryData.map((cat) => {
            return (
              <TouchableOpacity
                key={cat.id}
                onPress={() => handlePress(cat.id)}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: responsiveHeight(1.5),
                  borderWidth: 1,
                  borderColor: active === cat.id ? "#f4845f" : "#d9d9d9",
                  width: responsiveHeight(12),
                  height: responsiveHeight(5),
                  backgroundColor: active === cat.id ? "#f79d65" : "#d9d9d9",
                }}
              >
                <Text>{cat.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;
