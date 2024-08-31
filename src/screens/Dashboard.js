import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Deals from "../components/Deals";
import Brands from "../components/Brands";
import { responsiveWidth } from "react-native-responsive-dimensions";

const Dashboard = () => {
  return (
    <View style={{ flex: 1, padding: responsiveWidth(3) }}>
      <Header />
      <Searchbar />
      <Deals />
      <Brands />
      {/* <Products /> */}
    </View>
  );
};

export default Dashboard;
