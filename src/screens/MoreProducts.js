import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Categories from "../components/Categories";
import Moreproducts from "../components/Moreproducts";

const MoreProducts = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: responsiveWidth(3),
        marginTop: responsiveHeight(1),
      }}
    >
      {/* Searchbar */}
      <View
        style={{
          backgroundColor: "#f2cc8f",
          height: responsiveHeight(9),
          marginBottom: responsiveHeight(1),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: responsiveHeight(1),
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back"
              size={25}
              style={{ marginTop: responsiveHeight(2.5) }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginRight: responsiveWidth(2),
              fontWeight: "bold",
              fontSize: responsiveFontSize(2),
              marginTop: responsiveHeight(2.5),
            }}
          >
            Flash Sale
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: responsiveHeight(5.3),
              width: "50%",
              borderColor: "#000",
              borderWidth: 1,
              borderRadius: responsiveHeight(2),
              paddingLeft: responsiveWidth(4),
            }}
          >
            <Ionicons name="search" size={20} style={{ marginRight: 5 }} />
            <TextInput placeholder="Search here" placeholderTextColor="#000" />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: responsiveHeight(2),
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Ionicons
                name="cart-outline"
                size={25}
                style={{ marginRight: responsiveWidth(2) }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="share-outline" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginLeft: responsiveWidth(2),
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: "#e36414",
              marginTop: -responsiveHeight(1),
            }}
          >
            Limited Time Offer
          </Text>
        </View>
      </View>

      <Categories />
      <Moreproducts />
    </ScrollView>
  );
};

export default MoreProducts;
