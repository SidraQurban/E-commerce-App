import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Deals from "../components/Deals";

const Dashboard = () => {
  return (
    <View>
      <Header />
      <Searchbar />
      <Deals />
      {/* <Brands /> */}
      {/* <Products /> */}
    </View>
  );
};

export default Dashboard;
