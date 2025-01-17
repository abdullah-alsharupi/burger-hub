import { useSessionStore } from "@/src/store/useSessionStore";
import { router } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ContentDetails = () => {
  const { session } = useSessionStore();
  if (!session) {
    router.navigate("/auth");
  }
  return (
    <View style={styles.contactDetails}>
      <Text style={styles.label}>Contact details</Text>

      <TouchableOpacity style={styles.input}>
        <Text style={styles.ContentTitle}>Name</Text>
        <Text style={styles.ContentDescription}>{session?.name}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.input}>
        <Text style={styles.ContentTitle}>Phone #</Text>
        <Text style={styles.ContentDescription}>{session?.phone}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contactDetails: {
    marginBottom: 20,
    height: windowHeight * 0.25,
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    width: "100%",
  },
  input: {
    height: windowHeight * 0.09,
    backgroundColor: "#fff",
    width: "100%",
    paddingLeft: 25,
    borderRadius: 15,
    paddingTop: 5,
  },
  ContentTitle: {
    color: "#000000",
    opacity: 0.7,
  },
  ContentDescription: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default ContentDetails;
