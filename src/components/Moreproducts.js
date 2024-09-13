import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import { productData } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const Moreproducts = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(null);
  const handlePress = (id) => {
    setActive(active === id ? null : id);
  };

  const rows = [];
  for (let i = 0; i < productData.length; i += 2) {
    rows.push(productData.slice(i, i + 2));
  }
  return (
    <View>
      <Text>Hi</Text>
    </View>
  );
};

export default Moreproducts;
