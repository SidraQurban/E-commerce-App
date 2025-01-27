import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';

const Cart = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    if (route.params?.product) {
      // Adding product to the cart when navigating
      setCartItems(prevItems => [...prevItems, route.params.product]);
    }
  }, [route.params?.product]);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={25} style={{ marginTop: responsiveHeight(2.5) }} />
          </TouchableOpacity>
          <Text style={{ fontSize: responsiveFontSize(2.2), fontWeight: 'bold', textAlign: 'center', marginLeft: responsiveHeight(15), marginTop: responsiveHeight(2) }}>
            My Cart
          </Text>
        </View>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => <CartItem key={index} product={item} />)
        ) : (
          <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: responsiveHeight(55),
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontWeight: "bold",
              color: "gray",
            }}
          >
            Your cart is empty
          </Text>
        </View>
        )}
      </ScrollView>

      <Footer />
    </>
  );
};

export default Cart;
