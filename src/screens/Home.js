import { View, Text, Image, TouchableOpacity, StatusBar, TextInput } from "react-native";
import React, {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {
const [showPassword, setShowPassword] = useState(false);

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
          <Image source={require("../../assets/logo.png")}
            style={{
              resizeMode: "contain",
              height: responsiveHeight(5),
              width: responsiveWidth(40),
              alignSelf: "center",
              marginTop: responsiveHeight(-50),
              // marginLeft: responsiveWidth(-55),
            }}/>
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
            secureTextEntry={!showPassword}
            placeholder="enter your password"
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
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{
              position: "relative",
              marginLeft: responsiveWidth(84),
              marginTop: responsiveHeight(-4.5),
            }}
          >
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          style={{
            backgroundColor: "#212529",
            borderRadius: 10,
            alignSelf: "center",
            justifyContent: "center",
            width: responsiveWidth(85),
            height: responsiveWidth(15),
            top: responsiveHeight(5),
          }}
        >
          <Text
            style={{
              color: "#f8f9fa",
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
