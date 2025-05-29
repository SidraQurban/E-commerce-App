import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { Fontisto, Feather,AntDesign } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingVertical: responsiveHeight(1),
        marginTop: responsiveHeight(-4),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{
            height: responsiveHeight(10),
            width: responsiveWidth(30),
            resizeMode: "contain",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
          
          onPress={() => navigation.navigate("Home")}
            style={{
              marginRight: responsiveWidth(2),
              marginVertical: responsiveHeight(1.5),
            }}
          >
            <AntDesign name="logout" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
