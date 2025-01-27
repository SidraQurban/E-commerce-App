import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from "react-native-vector-icons";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";

const Cart = () => {
  const navigation = useNavigation();
  return (
    <>
        <ScrollView showsVerticalScrollIndicator = {false}>       
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back"
              size={25}
              style={{ marginTop: responsiveHeight(2.5) }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              fontWeight: "bold",
              textAlign: "center",
              marginLeft: responsiveHeight(15),
              marginTop: responsiveHeight(2),
            }}
          >
            My Cart
          </Text>
        </View>
         {/* horizontal line */}
         <View
            style={{
              marginTop: 20,
              height: 1,
              width: "100%",
              backgroundColor: "#ced4da",
            }}
          />
          <CartItem/>
          </ScrollView>
   
      <Footer/>
    </>
  );
};

export default Cart;
