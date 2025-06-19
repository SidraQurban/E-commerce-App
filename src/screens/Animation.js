import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from 'react-native-vector-icons';

const Animation = () => {
   const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <Entypo
          name="cross"
          size={25}
          style={{ marginTop: responsiveHeight(2), marginLeft: responsiveWidth(90)}}
        />
      </TouchableOpacity>
      <LottieView
        style={{ height: responsiveHeight(70), width: responsiveWidth(100) }}
        source={require("../../Animation - 1738038020472.json")}
        autoPlay
        loop
      />
      <Text
        style={{
          fontSize: responsiveFontSize(2.2),
          alignSelf: "center",
          fontWeight: "bold",
          marginBottom: responsiveHeight(10),
          color: "#343a40",
        }}
      >
        Your order has been placed successfully! 😊
      </Text>
    </View>
  );
};

export default Animation