import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import Tabs from "./Tabs";
  import SearchInput from "../ui/SearchInput";
 const { width, height } = Dimensions.get("screen");
const Homes: React.FC = () => {
 
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Delicious</Text>
            <Text style={styles.titleText}>burgers for you</Text>
            <SearchInput color="#000" backgroundColor="#E0E0E0" />
          </View>
        </View>

        <Tabs />

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    width: width,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    marginLeft: 25,
    height: 120,
    paddingHorizontal: 10,
  },
  titleContainer: {
    width: "90%",
  },
  titleText: {
    fontSize: 40,
    color: "black",
    marginBottom: 5,
  },

});

export default Homes;
