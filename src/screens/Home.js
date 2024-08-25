import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#fff", height: responsiveHeight(100) }}>
        <View
          style={{
            top: responsiveHeight(5),
          }}
        >
          <Image
            source={require("../../assets/shopping.png")}
            style={{
              resizeMode: "cover",
              marginLeft: responsiveWidth(5),
              height: responsiveHeight(40),
              width: responsiveWidth(90),
              marginBottom: responsiveHeight(6),
            }}
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: responsiveScreenFontSize(3),
            fontWeight: "bold",
            color: "#fb5607",
            marginBottom: responsiveHeight(2),
          }}
        >
          ShopEase
        </Text>
        <Text
          style={{
            marginHorizontal: responsiveWidth(5),
            fontSize: responsiveScreenFontSize(2.3),
            color: "#000",
            marginBottom: responsiveHeight(23),
          }}
        >
          Discover the best deals, and enjoy a user-friendly interface that
          makes online shopping effortless.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          style={{
            backgroundColor: "#f9844a",
            borderRadius: 10,
            alignSelf: "center",
            justifyContent: "center",
            width: responsiveWidth(80),
            height: responsiveWidth(15),
          }}
        >
          <Text
            style={{
              color: "#000",
              textAlign: "center",
              fontSize: responsiveScreenFontSize(2.7),
              fontWeight: "bold",
            }}
          >
            Let's go
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
