import React from "react";
import { Image, View } from "react-native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const Imageproducts = ({ imageBase }: any) => {
  return (
    <View>
      <Image
      src={imageBase}
        style={{
          height: windowHeight * 0.35,
          width: windowWidth * 0.6,
          zIndex: 999,
        }}
      />
    </View>
  );
};

export default Imageproducts;
