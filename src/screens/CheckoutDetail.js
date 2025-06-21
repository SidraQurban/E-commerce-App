import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import CheckoutForm from '../components/CheckoutForm';
import PaymentMethod from '../components/PaymentMethod';
const CheckoutDetail = () => {
const navigation = useNavigation();

  return (

    <SafeAreaView style={{ flex: 1 }}>
     <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: responsiveHeight(4) }}
      >  
          <View style={{ padding: responsiveHeight(1) }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginTop: responsiveHeight(0.5) }}
            >
              <Ionicons name="chevron-back" size={25} />
            </TouchableOpacity>
            <View
              style={{
                height: responsiveHeight(3),
                width: responsiveHeight(3),
                borderRadius: responsiveHeight(3) / 2,
                backgroundColor: "#000",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: responsiveFontSize(2),
                  fontWeight: "bold",
                }}
              >
                !
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: responsiveFontSize(2.7),
                fontWeight: "bold",
                marginTop: responsiveHeight(1),
              }}
            >
              You're
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(2.7),
                fontWeight: "bold",
              }}
            >
              almost done
            </Text>
            <Text
              style={{
                marginTop: responsiveHeight(1),
                fontSize: responsiveFontSize(1.78),
              }}
            >
              Please provide your personal information
            </Text>
            <Text style={{ fontSize: responsiveFontSize(1.78) }}>
              and credit card details to complete your order securely.
            </Text>
          </View>
        </View>
        <CheckoutForm />
        <PaymentMethod />
      </ScrollView>
    </SafeAreaView>
  );
}
export default CheckoutDetail;