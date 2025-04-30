import { View, TextInput, TouchableOpacity, Platform } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
import { launchCamera } from "react-native-image-picker";

const Searchbar = () => {

const camera = async() =>{
  let options = {
    mediaType:"camera",
    maxWidth: responsiveHeight(90),
    maxHeight: responsiveHeight(90),
  }
  let isCameraPermitted = await requestCameraPermissions();
  if(isCameraPermitted || Platform.Version >13){
    launchCamera(options, (response) => { 
      if(response.errorCode){
        alert(response.errorMessage)
      } else {
        
      }
    })
  }
}
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:responsiveHeight(-2)
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          height: responsiveHeight(6.5),
          width: "85%",
          borderColor: "#000",
          borderWidth: 1,
          borderRadius: responsiveHeight(2),
          paddingLeft: responsiveWidth(4),
        }}
      >
        <Ionicons name="search" size={20} style={{ marginRight: 10 }} />
        <TextInput placeholder="Search here" placeholderTextColor="#000" />
      </View>
      <TouchableOpacity
        style={{
          height: responsiveHeight(6.5),
          width: "13%",
          borderRadius: responsiveHeight(2),
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name="line-scan" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Searchbar;
