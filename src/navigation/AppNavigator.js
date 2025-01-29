import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Dashboard from "../screens/Dashboard";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Cart from "../screens/Cart";
import MoreProducts from "../screens/MoreProducts";
import DetailProduct from "../screens/DetailProduct";
import Animation from "../screens/Animation";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="MoreProducts" component={MoreProducts} />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
        <Stack.Screen name="Animation" component={Animation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
