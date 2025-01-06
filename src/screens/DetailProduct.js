import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveHeight } from 'react-native-responsive-dimensions';

const DetailProduct = () => {
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            height:responsiveHeight('40'),
            backgroundColor: "#e9ecef",
            borderBottomRightRadius: responsiveHeight(5),
          }}
        >
          <Text>DetailProduct</Text>
          <Image
            source={require("../../assets/lipstick.png")}
            style={{
              resizeMode: "contain",
              alignSelf: "center",
              height: responsiveHeight(35),
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DetailProduct