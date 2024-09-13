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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}>
          For You
        </Text>
      </View>
      {rows.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: responsiveHeight(0.5),
          }}
        >
          {row.map((product) => (
            <View
              key={product.id}
              style={{
                width: "48%",
                height: responsiveHeight(30),
                borderRadius: responsiveHeight(2),
                backgroundColor: "#f8f9fa",
              }}
            >
              {/* Image */}
              <TouchableOpacity>
                <Image
                  source={product.img}
                  style={{
                    backgroundColor: "#e9ecef",
                    height: responsiveHeight(17),
                    resizeMode: "contain",
                    width: "100%",
                  }}
                />
              </TouchableOpacity>

              {/* Product Text  */}
              <View>
                <View
                  style={{
                    marginTop: responsiveHeight(0.5),
                    marginBottom: responsiveHeight(0.5),
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: responsiveFontSize(2),
                    }}
                  >
                    {product.name}
                  </Text>
                  <TouchableOpacity onPress={() => handlePress(product.id)}>
                    <AntDesign
                      name={active === product.id ? "heart" : "hearto"}
                      size={17}
                      color={active === product.id ? "red" : "red"}
                    />
                  </TouchableOpacity>
                </View>
                {/* Pricing */}
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: responsiveHeight(0.5),
                  }}
                >
                  <Text style={{ color: "#6c757d" }}>{product.price}</Text>
                  <Text
                    style={{
                      marginLeft: responsiveWidth(2),
                      color: "#6c757d",
                      height: responsiveHeight(2.4),
                      backgroundColor: "#ced4da",
                    }}
                  >
                    {product.discount}
                  </Text>
                </View>
                {/* Product Rating */}
                <View style={{ flexDirection: "row" }}>
                  <AntDesign name="star" color="#fcbf49" size={18} />
                  <Text
                    style={{ marginLeft: responsiveWidth(1), color: "#343a40" }}
                  >
                    {product.rating}
                  </Text>
                  <Text
                    style={{ marginLeft: responsiveWidth(1), color: "#343a40" }}
                  >
                    {product.sold}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Moreproducts;
