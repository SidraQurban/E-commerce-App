import { View, Text, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailProduct = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView
        
      >
        <View style={{flexDirection: "row", marginHorizontal: 16, marginTop: 40, justifyContent:"space-between", alignItems: "center"}}>
        <TouchableOpacity onPress={()=> navigation.goBack()} >
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity >
        <FontAwesome name={"heart-o"} size={28} color="black" />
        </TouchableOpacity>

       
          
        </View>
       
      </SafeAreaView>
    </View>
  );
};

export default DetailProduct;
