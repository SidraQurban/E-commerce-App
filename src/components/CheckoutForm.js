import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const CheckoutForm = () => {
  return (
    <View style={{ padding: responsiveHeight(1) }}>
      <Text
        style={{
          fontSize: responsiveHeight(2),
          fontWeight: "bold",
        }}
      >
        First name
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
      {/* last name */}
      <Text
        style={{
          fontSize: responsiveHeight(2),
          fontWeight: "bold",
          marginTop: responsiveHeight(1),
        }}
      >
        Last name
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
          marginTop: responsiveHeight(2),
        }}
      >
        Email
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
      {/* Billing address */}
      <Text
        style={{
          fontSize: responsiveHeight(2),
          fontWeight: "bold",
          marginTop: responsiveHeight(2),
        }}
      >
        Billing Address
      </Text>
      <Text
        style={{
          fontSize: responsiveHeight(2),
          fontWeight: "bold",
          marginTop: responsiveHeight(2),
        }}
      >
        Address
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
          Zip code
        </Text>
        <Text
          style={{
            fontSize: responsiveHeight(2),
            fontWeight: "bold",
            marginTop: responsiveHeight(1),
            marginRight: responsiveWidth(36),
          }}
        >
          City
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
      <Text
        style={{
          fontSize: responsiveHeight(2),
          fontWeight: "bold",
          marginTop: responsiveHeight(2),
        }}
      >
        Country
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
    </View>
  );
}

export default CheckoutForm