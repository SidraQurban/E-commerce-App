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
            height: responsiveHeight(5.5),
            width: "45%",
            borderColor: "#000",
            borderWidth: 1,
            borderRadius: responsiveHeight(2),
            paddingLeft: responsiveWidth(4),
          }}
        >
          <Ionicons name="search" size={20} style={{ marginRight: 5 }} />
          <TextInput placeholder="Search here" placeholderTextColor="#000" />
        </View>
        <TouchableOpacity
          style={{
            height: responsiveHeight(6.5),
            width: "13%",
            borderRadius: responsiveHeight(2),
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="line-scan" size={30} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MoreProducts;
