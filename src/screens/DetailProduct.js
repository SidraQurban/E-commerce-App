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
              height: responsiveHeight(20),
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DetailProduct