import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Footer from '../components/Footer';

const Fav = () => {
const navigation = useNavigation();
const route = useRoute();
const [favorites, setFavorites] = useState([]);

useEffect(() => {
    const newProduct = route.params?.product;

    if (newProduct) {
      setFavorites((prevItems) => {
        const exists = prevItems.some((item) => item.id === newProduct.id);
        if (!exists) {
          return [...prevItems, newProduct];
        }
        return prevItems;
      });
    }
  }, [route.params?.product]);

  const handleRemove = (id) => {
    setFavorites((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
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
            Favorites
          </Text>
        </View>

        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#e0e1dd",
            marginTop: responsiveHeight(2),
          }}
        />

        {favorites.length > 0 ? (
          favorites.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: responsiveHeight(2),
                marginHorizontal: responsiveWidth(4),
                backgroundColor: "#f8f8f8",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={item.img}
                  style={{
                    width: responsiveWidth(20),
                    height: responsiveWidth(20),
                    borderRadius: 8,
                    marginRight: 15,
                  }}
                  resizeMode="cover"
                />
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    fontWeight: "600",
                    marginLeft:responsiveWidth(2),
                  }}
                >
                  {item.name}
                </Text>
              </View>

              <TouchableOpacity onPress={() => handleRemove(item.id)}>
                <Ionicons name="close-circle" size={24}  />
              </TouchableOpacity>
            </View>
          ))
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
              No favorites yet
            </Text>
          </View>
        )}
      </ScrollView>
      <Footer />
    </>
  );
};

export default Fav;
