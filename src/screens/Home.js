import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
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
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />

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
              height: responsiveHeight(45),
              width: responsiveWidth(100),
              marginBottom: responsiveHeight(6),
            }}
          />
        </View>
        <View>
  <Text
          style={{
            textAlign: "center",
            fontSize: responsiveScreenFontSize(3),
            fontWeight: "italic",
            fontFamily: "Poppins_700Bold",
            letterSpacing: 1,
            color: "#fb5607",
            marginTop: responsiveHeight(-49.5),
            
          }}
        >
          ShopEase
        </Text>
        </View>
      
        <Text
          style={{
            marginTop: responsiveHeight(5),
            marginHorizontal: responsiveWidth(5),
            fontSize: responsiveScreenFontSize(2.3),
            color: "#000",
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
            top: responsiveHeight(10),
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
