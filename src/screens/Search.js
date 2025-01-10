import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Deals from "../components/Deals";
import { responsiveWidth } from "react-native-responsive-dimensions";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

const Search = () => {
  return (
    <>
    <ScrollView
      style={{ flex: 1, padding: responsiveWidth(3) }}
      showsVerticalScrollIndicator={false}
    >
      <Searchbar/>
      <Categories/>
     
    </ScrollView>
    <Footer />
  </>

  );
};

export default Search;
