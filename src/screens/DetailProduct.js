import { View, Text, Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import {Ionicons,AntDesign,FontAwesome,FontAwesome5} from "react-native-vector-icons";
import {useNavigation, useRoute} from '@react-navigation/native';

const DetailProduct = () => {
const navigation = useNavigation();
const route = useRoute();  // Get the passed product data
const { product } = route.params;
const handleAddToCart = () =>{
  navigation.navigate("Cart", { product})
  }  
const shareProduct = () => {
    Share.share({
      message: `Check out this product: ${product.name} in ${product.price}`,
      url: product.img, 
    })
  }
    return (
      <SafeAreaView>
        <View>
          <View
            style={{
              height: responsiveHeight("48"),
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
              source={product.img}
              style={{
                resizeMode: "contain",
                alignSelf: "center",
                height: responsiveHeight(38),
              }}
            />
          </View>
          {/* p.name */}
          <View
            style={{
              marginLeft: responsiveWidth(1),
              padding: responsiveHeight(1),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: responsiveHeight(3), fontWeight: "bold" }}>
              {product.name}
            </Text>
            <TouchableOpacity
             onPress={()=>shareProduct()}
            style={{ marginRight: responsiveWidth(2) }}>
              <FontAwesome5 name="share" size={23} />
            </TouchableOpacity>
          </View>
          <View>
            {/* price */}
            <Text
              style={{
                top: responsiveHeight(-0.2),
                marginLeft: responsiveWidth(72),
                color: "#495057",
                fontWeight: "bold",
                fontSize: responsiveFontSize(2.5),
              }}
            >
              {product.price}
            </Text>
          </View>
          {/* rating */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: responsiveWidth(2.5),
              marginTop: responsiveHeight(-3),
            }}
          >
            <AntDesign name="star" size={20} color="#fcbf49" />
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                marginLeft: responsiveWidth(2),
                color: "#495057",
              }}
            >
              {product.rating} {product.sold}
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
            <Text
              style={{
                fontSize: responsiveFontSize(1.9),
                marginTop: responsiveHeight(1),
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              vestibulum ex. Donec condimentum urna id diam consectetur, vitae
              pulvinar ex scelerisque.
            </Text>
          </View>
          {/* color avalaible */}
          <View
            style={{
              padding: responsiveWidth(2.5),
              marginLeft: responsiveWidth(1),
            }}
          >
            <Text
              style={{ fontSize: responsiveFontSize(2.5), fontWeight: "bold" }}
            >
              Color avalaible
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: responsiveHeight(1),
                marginLeft: responsiveWidth(2),
              }}
            >
              <TouchableOpacity>
                <FontAwesome name="square" size={24} color="#52b788" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome
                  name="square"
                  size={24}
                  color="#3c096c"
                  style={{ marginLeft: responsiveWidth(1.5) }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome
                  name="square"
                  size={24}
                  color="#f26a8d"
                  style={{ marginLeft: responsiveWidth(1.5) }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome
                  name="square"
                  size={24}
                  style={{ marginLeft: responsiveWidth(1.5) }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome
                  name="square"
                  size={24}
                  color="#aed9e0"
                  style={{ marginLeft: responsiveWidth(1.5) }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: responsiveWidth(62),
                marginTop: responsiveHeight(-3),
              }}
            >
              <Ionicons name="location" size={18} color="#343a40" />
              <Text
                style={{
                  color: "#343a40",
                  fontSize: responsiveFontSize(1.8),
                  marginLeft: responsiveWidth(1),
                }}
              >
                Deliver in 2 days
              </Text>
            </View>
            {/* button */}
            <TouchableOpacity onPress={handleAddToCart}>
              <Text
                style={{
                  marginTop: responsiveHeight(6),
                  fontSize: responsiveFontSize(2.5),
                  fontWeight: "bold",
                  color: "#fff",
                  backgroundColor: "#212529",
                  height: responsiveHeight(6),
                  width: responsiveHeight(40),
                  elevation: 5,
                  shadowColor: "#000",
                  shadowOpacity: 0.25,
                  marginLeft: responsiveWidth(2.5),
                  borderRadius: responsiveHeight(3),
                  textAlign: "center",
                  padding: responsiveHeight(1),
                }}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
} 

export default DetailProduct;



