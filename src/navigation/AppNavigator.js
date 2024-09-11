import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Dashboard from "../screens/Dashboard";
import Fav from "../screens/Fav";
import Search from "../screens/Search";
import Cart from "../screens/Cart";
import MoreProducts from "../screens/MoreProducts";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Fav" component={Fav} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="MoreProducts" component={MoreProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
