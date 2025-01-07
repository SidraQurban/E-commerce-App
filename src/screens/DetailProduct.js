import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import {Ionicons,AntDesign} from "react-native-vector-icons";
import {useNavigation} from '@react-navigation/native';

const DetailProduct = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            height: responsiveHeight("40"),
            backgroundColor: "#e9ecef",
            borderBottomRightRadius: responsiveHeight(5),
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back"
              size={25}
              style={{ marginTop: responsiveHeight(2.5) }}
            />
          </TouchableOpacity>
          {/* p.image  */}
          <Image
            source={require("../../assets/lipstick.png")}
            style={{
              resizeMode: "contain",
              alignSelf: "center",
              height: responsiveHeight(35),
            }}
          />
        </View>
        {/* p.name */}
        <View
          style={{
            padding: responsiveHeight(2),
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: responsiveHeight(3), fontWeight: "bold" }}>
            Lipstick
          </Text>
          {/* price */}
          <Text
            style={{
              color: "#ff6d00",
              fontWeight: "bold",
              fontSize: responsiveFontSize(2),
            }}
          >
            Rs.340
          </Text>
        </View>
        {/* rating */}
        <View
          style={{
            flexDirection: "row",
            // padding: responsiveHeight(2),
            marginLeft: responsiveWidth(2.5),
          }}
        >
          <AntDesign name="star" size={20} color="#fcbf49" />
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              marginLeft: responsiveWidth(2),
              color: "#ff6d00",
            }}
          >
            4.5 (230 Review)
          </Text>
        </View>
        {/* Details */}
        <View
          style={{
            padding: responsiveWidth(2.5),
            marginLeft: responsiveWidth(1),
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(2.5), fontWeight: "bold" }}
          >
            Details
          </Text>
          <Text style={{fontSize:responsiveFontSize(1.9),marginTop:responsiveHeight(1)}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            vestibulum ex. Donec condimentum urna id diam consectetur, vitae
            pulvinar ex scelerisque.
          </Text>
        </View>
        {/* color avalaible */}
      </View>
    </SafeAreaView>
  );
}

export default DetailProduct