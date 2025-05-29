import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const CheckoutDetail = () => {
    const navigation = useNavigation();
  return (
    <>
    <SafeAreaView>
       <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="chevron-back"
                    size={25}
                    style={{ marginTop: responsiveHeight(0.5) }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.2),
                    fontWeight: "bold",
                    textAlign: "center",
                    marginLeft: responsiveHeight(15),
                    marginTop: responsiveHeight(0.5),
                  }}
                >
                  Checkout 
                </Text>
              </View>
               {/* horizontal line */}
                      <View
                        style={{
                          height: 1,
                          width: "100%",
                          backgroundColor: "#e0e1dd",
                          marginTop: responsiveHeight(2),
                        }}
                      />
              {/* <CheckoutForm /> */}
              {/* <PaymentMethod /> */}
              {/* <Footer /> */}
    </SafeAreaView>
   
    </>
  );
}

export default CheckoutDetail