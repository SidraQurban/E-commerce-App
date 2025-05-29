import { View, Text } from 'react-native';
import React from 'react';
import Footer from '../components/Footer';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const Fav = () => {
  const navigation = useNavigation();
  return (
    <View>
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
          Favorites
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
          Your favorite items will appear here.
        </Text>
      </View>

      <View style={{ marginTop: responsiveHeight(30) }}>
        <Footer />
      </View>
    </View>
  );
};

export default Fav;
