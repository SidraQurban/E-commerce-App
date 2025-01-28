import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import { Entypo, AntDesign, Ionicons } from "react-native-vector-icons";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const CartItem = ({product}) => {
  const [noteCount, setNoteCount] = useState(1);
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const handleIncrement = () => {
    setNoteCount(noteCount + 1);
  };

  const handleDecrement = () => {
    if (noteCount > 0) {
      setNoteCount(noteCount - 1);
    }
  };

  const handleCancel = () => {
    setIsVisible(false); // Hide the cart item
  };
  const [number, onchangeNumber] = useState('');

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {isVisible ? (
        <ScrollView>
          {/* Cart Item */}
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              height: responsiveHeight(22),
            }}
          >
            {/* Product Image */}
            <View
              style={{
                marginTop: responsiveHeight(2.5),
                height: responsiveHeight(20),
                width: responsiveWidth(35),
                borderRadius: responsiveHeight(1),
                backgroundColor: "#e9ecef",
                marginLeft: responsiveWidth(5),
              }}
            >
              <Image
                source={product.img}
                style={{
                  resizeMode: "contain",
                  height: responsiveHeight(25),
                  width: responsiveWidth(20),
                  alignSelf: "center",
                }}
              />
            </View>
            {/* Product Name */}
            <Text
              style={{
                marginTop: responsiveHeight(3.6),
                marginLeft: responsiveWidth(3),
                fontSize: responsiveFontSize(2),
                fontWeight: "bold",
              }}
            >
              {product.name}
            </Text>
          </View>

          {/* Price */}
          <View>
            <Text
              style={{
                marginLeft: responsiveWidth(46),
                marginTop: responsiveHeight(-13),
                fontSize: responsiveFontSize(1.9),
                fontWeight: "bold",
              }}
            >
              {product.price}
            </Text>
          </View>

          {/* Quantity */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: responsiveWidth(46),
              marginTop: responsiveHeight(-2),
            }}
          >
            {/* Increment */}
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                borderColor: "grey",
                borderWidth: 1,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                width: 22,
                height: 22,
              }}
              onPress={handleIncrement}
            >
              <Ionicons name="add" size={20} color="black" />
            </TouchableOpacity>

            {/* Counter */}
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: "bold",
                marginLeft: responsiveWidth(2),
              }}
            >
              {noteCount}
            </Text>

            {/* Decrement */}
            <TouchableOpacity
              style={{
                marginLeft: responsiveWidth(2.5),
                backgroundColor: "#fff",
                borderColor: "grey",
                borderWidth: 1,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                width: 22,
                height: 22,
              }}
              onPress={handleDecrement}
            >
              <AntDesign name="minus" size={20} color="black" />
            </TouchableOpacity>
          </View>

          {/* Cancel Button */}
          <TouchableOpacity
            style={{
              marginLeft: responsiveWidth(89),
              marginTop: responsiveHeight(-2),
            }}
            onPress={handleCancel} // Hide component on press
          >
            <Entypo name="cross" size={20} color="black" />
          </TouchableOpacity>
          {/* Footer  */}
          <View>
            <TextInput
              value={number}
              onChangeText={onchangeNumber}
              placeholder="Promo code"
              keyboardType="numeric"
              style={{
                marginTop: responsiveHeight(28),
                height: responsiveHeight(6),
                margin: responsiveHeight(2),
                borderRadius: responsiveHeight(3),
                borderColor: "#e0e1dd",
                borderWidth: 1,
                padding: responsiveHeight(2),
              }}
            />
            <TouchableOpacity
              style={{
                top: responsiveHeight(-8),
                marginLeft: responsiveWidth(65),
                backgroundColor: "#ff6d00",
                height: responsiveHeight(6),
                borderRadius: responsiveHeight(3),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Apply
              </Text>
            </TouchableOpacity>
            {/* sub total */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: responsiveWidth(1),
              }}
            >
              <Text style={{ fontSize: responsiveFontSize(2) }}>Sub Total</Text>
              <Text
                style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}
              >
                Rs 1,450
              </Text>
            </View>
            {/* dc */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: responsiveWidth(1),
                marginTop:responsiveHeight(2)
              }}
            >
              <Text style={{ fontSize: responsiveFontSize(2) }}>Shipping</Text>
              <Text
                style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}
              >
                Rs 30.0
              </Text>
            </View>
            {/* total */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: responsiveWidth(1),
                marginTop:responsiveHeight(2)
              }}
            >
              <Text style={{ fontSize: responsiveFontSize(2) }}>Total</Text>
              <Text
                style={{ fontSize: responsiveFontSize(2), fontWeight: "bold" }}
              >
                Rs 1,480
              </Text>
            </View>

          </View>
        </ScrollView>
      ) : (
        // Display this message when the cart is empty
        <View
          style={{
            flex: 1,
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
    </View>
  );
};

export default CartItem;
