import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentMethod = () => {
    const navigation = useNavigation();
  return (
    <View style={{ padding: responsiveHeight(1) }}>
      <View>
        <Text style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}>
          Payment method
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../../assets/gpay.png")}
            style={{
              resizeMode: "contain",
              height: responsiveHeight(13),
              width: responsiveHeight(13),
            }}
          />
          <Image
            source={require("../../assets/card.png")}
            style={{
              marginTop: responsiveHeight(1),
              resizeMode: "contain",
              height: responsiveHeight(13),
              width: responsiveHeight(13),
              marginRight: responsiveWidth(30),
              marginLeft: responsiveWidth(-1),
            }}
          />

          <Image
            source={require("../../assets/easypaisa.png")}
            style={{
              marginTop: responsiveHeight(2.5),
              resizeMode: "contain",
              height: responsiveHeight(8),
              width: responsiveHeight(8),
              marginRight: responsiveWidth(25),
              marginLeft: responsiveWidth(-32),
            }}
          />
        </View>
      </View>
      {/* card details */}
      <View>
        <Text
          style={{
            fontSize: responsiveHeight(2),
            fontWeight: "bold",
            marginTop: responsiveHeight(1),
          }}
        >
          Card number
        </Text>
        <TextInput
          keyboardType="numeric"
          style={{
            height: responsiveHeight(6),
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 15,
            width: responsiveWidth(85),
            marginTop: responsiveHeight(1),
          }}
        />
        <Text
          style={{
            fontSize: responsiveHeight(2),
            fontWeight: "bold",
            marginTop: responsiveHeight(1),
          }}
        >
          Card holder name
        </Text>
        <TextInput
          keyboardType="numeric"
          style={{
            height: responsiveHeight(6),
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 15,
            width: responsiveWidth(85),
            marginTop: responsiveHeight(1),
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: responsiveHeight(1),
          }}
        >
          <Text
            style={{
              fontSize: responsiveHeight(2),
              fontWeight: "bold",
              marginTop: responsiveHeight(1),
            }}
          >
            Expiry date
          </Text>
          <Text
            style={{
              fontSize: responsiveHeight(2),
              fontWeight: "bold",
              marginTop: responsiveHeight(1),
              marginRight: responsiveWidth(36),
            }}
          >
            CVV
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            keyboardType="numeric"
            style={{
              height: responsiveHeight(6),
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              width: responsiveWidth(35),
              marginTop: responsiveHeight(1),
            }}
          />
          <TextInput
            keyboardType="numeric"
            style={{
              height: responsiveHeight(6),
              borderColor: "#ccc",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 15,
              width: responsiveWidth(35),
              marginTop: responsiveHeight(1),
              marginRight: responsiveWidth(10),
            }}
          />
        </View>
        <View style={{ marginTop: responsiveHeight(1.6) }}>
          <Text
            style={{ fontSize: responsiveFontSize(2), textAlign: "center" }}
          >
            save information for future payments
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Animation")}>
          <Text
            style={{
              marginTop: responsiveHeight(5),
              fontSize: responsiveFontSize(2.5),
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#212529",
              padding: responsiveHeight(2),
              borderRadius: responsiveHeight(2),
              textAlign: "center",
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PaymentMethod