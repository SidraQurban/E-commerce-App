import { View, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Deals from "../components/Deals";
import Brands from "../components/Brands";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <ScrollView
        style={{ flex: 1, padding: responsiveWidth(3) }}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Searchbar />
        <Deals />
        <Brands />
        <Products />
      </ScrollView>
      <Footer />
    </>
  );
};

export default Dashboard;
