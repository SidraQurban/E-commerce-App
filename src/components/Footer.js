import { View } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { icons } from "../Constant";

const Footer = () => {
  const navigation = useNavigation();
  const activeRouteName = useNavigationState(
    (state) => state.routes[state.index].name
  );

  const handleIconPress = (route) => {
    navigation.navigate(route);
  };

  return (
    <View>
      <View
        style={{
          position: "static",
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
            const isActive = activeRouteName === icon.route;
            return (
              <TouchableOpacity
                key={icon.name}
                onPress={() => handleIconPress(icon.route)}
              >
                <Ionicons
                  name={isActive ? icon.activeName : icon.name}
                  size={25}
                  color={isActive ? "#2b2d42" : "#8d99ae"}
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
