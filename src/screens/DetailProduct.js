import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const DetailProduct = () => {
  return (
    <View>
      <SafeAreaView
        style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 40 }}
      >
        <Pressable style={{ flex: 1 }}>
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </Pressable>

        <FontAwesome name={"heart-o"} size={28} color="white" />
      </SafeAreaView>
    </View>
  );
};

export default DetailProduct;
