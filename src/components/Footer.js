import { View, Text } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../Constant";

const Footer = () => {
  const navigation = useNavigation();
  const [activeLogo, setActiveLogo] = useState("home-outline");

  const handleIconPress = (iconName, route) => {
    setActiveLogo(iconName);
    navigation.navigate(route);
  };

  return (
    <View>
      <View
        style={{
          height: responsiveHeight(7),
          borderTopEndRadius: responsiveHeight(3),
          borderTopLeftRadius: responsiveHeight(3),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            top: responsiveHeight(2),
            marginLeft: responsiveWidth(10),
            marginRight: responsiveWidth(10),
          }}
        >
          {icons.map((icon) => {
            return (
              <TouchableOpacity
                key={icon.name}
                onPress={() => handleIconPress(icon.name, icon.route)}
              >
                <Ionicons
                  name={activeLogo === icon.name ? icon.activeName : icon.name}
                  size={25}
                  color={activeLogo === icon.name ? "lightgrey" : "black"}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Footer;
