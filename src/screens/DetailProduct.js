import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
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
        <View style={{ padding: responsiveHeight(2), justifyContent:"space-between", flexDirection:"row" }}>
          <Text style={{ fontSize: responsiveHeight(3), fontWeight: "bold" }}>
            Lipstick
          </Text>
          <Text style={{fontSize:responsiveFontSize(2)}}>Rs.340</Text>
        </View>
        {/* DETAILS */}
        <View>
          <Text>
           <AntDesign name="star" size={10}/>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DetailProduct