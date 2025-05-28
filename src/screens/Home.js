import { View, Text, Image, TouchableOpacity, StatusBar, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Ionicons from "react-native-vector-icons/Ionicons";

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
              fontWeight: "bold",
              color: "#fb5607",
              marginTop: responsiveHeight(-49.5),
            }}
          >
            ShopEase
          </Text>
        </View>
        <View style={{ marginTop: responsiveHeight(2) }}>
          <Text
            style={{
              marginLeft: responsiveWidth(8.5),
              fontSize: responsiveScreenFontSize(2),
              fontWeight: "bold",
            }}
          >
            Enter your valid email address:
          </Text>
          <TextInput
            keyboardType="numeric"
            placeholder="example@gmail.com"
            style={{
              height: responsiveHeight(6),
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              marginHorizontal: responsiveWidth(8),
              marginTop: responsiveHeight(1),
            }}
          />
          <Text
            style={{
              marginTop: responsiveHeight(2),
              marginLeft: responsiveWidth(8.5),
              fontSize: responsiveScreenFontSize(2),
              fontWeight: "bold",
            }}
          >
            Enter Password:
          </Text>
          <TextInput
            secureTextEntry={true}
            style={{
              height: responsiveHeight(6),
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              marginHorizontal: responsiveWidth(8),
              marginTop: responsiveHeight(1),
            }}
          />
        <View>
            <Ionicons
            name="eye"
            size={24}
            color="black"
            style={{
              position: "relative",
              left: responsiveWidth(85),
             marginTop: responsiveHeight(-13),
              right: responsiveWidth(10),
              top: responsiveHeight(8),
            }}
          />
        </View>
        </View>

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
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
