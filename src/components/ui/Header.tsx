//  import React from 'react'
 
//  const HeaderSearchInpu = () => {
//    return (
//      <>
//      </>
//    )
//  }
 
//  export default HeaderSearchInpu

import React, { Component, createContext, useContext } from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
 
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { Col, Grid } from "react-native-easy-grid";
import { useNavigation } from "@react-navigation/native";
 import { Text } from "react-native-paper";
import SearchInput from "./SearchInput";
 
type HeaderProps = {
  style?: StyleProp<ViewStyle>;
  backgroundColorCode:string;
  headerRight?: React.ReactElement;
  left?:number;
  title?:string;
  headerSearch?:boolean;
  onBack?:()=>void;
};
type onBackProp ={
  onBack?:()=>void;

}

const headerHeight = 130;

type HeaderContextType = {
  goBack: () => void;
};

const HeaderContext = createContext<HeaderContextType | null>(null);

function useHeader() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("Header must be used within a HeaderProvider");
  }
  return context;
}

function Header({ style,backgroundColorCode,headerRight,onBack ,left,title,headerSearch}: HeaderProps) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const goBack = () => {
    navigation.goBack();
  };

  const contextValue: HeaderContextType = {
    goBack,
  };

  return (
    <HeaderContext.Provider value={contextValue}>
      <View
        style={[
          style,
          {
            paddingTop: insets.top,
            height: headerHeight,
            backgroundColor:backgroundColorCode,
            left:left
            
          },
        ]}
      >
        <Grid style={styles.container}>
          <Header.BackButton onBack={onBack} />
          {
headerSearch && <Header.SearchInputHeader backgroundColorCode={backgroundColorCode}/>
          }
          {title && <Text style={[styles.title]}>{title}</Text>}
          {headerRight}
          </Grid>
      </View>
    </HeaderContext.Provider>
  );
}

Header.BackButton = function HeaderBackButton({onBack}:onBackProp) {
  const { goBack } = useHeader();

  return (
    <Col size={0.2}>
      <TouchableOpacity onPress={onBack ? onBack :goBack} style={styles.button}>
        <Entypo name="chevron-thin-left" size={23} color="black" />
      </TouchableOpacity>
    </Col>
  );
};

Header.SearchInputHeader = function SearchInputHeader({backgroundColorCode}:HeaderProps){
  return (
<>
<View style={styles.search}>
         <SearchInput
          backgroundColor={backgroundColorCode}
         />
        </View>
</>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",  
  
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    flex: 1,  
    textAlign: "center",  
    right:20
    
  },
  button: {
    borderRadius: 150,
    left:20
  },
  search :{
    flex: 1,  
    right:20,
    top:5
  }
});









