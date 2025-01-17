import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "@/src/components/ui/Button";
import NetInfo from "@react-native-community/netinfo";

const { width, height } = Dimensions.get("screen");

const Disconnected = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    // Initial check for connection status
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const retryConnection = async () => {
    const state = await NetInfo.fetch();
    setIsConnected(state.isConnected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("@/assets/images/networkX.png")} />
        <Text style={{ fontSize: 24, fontWeight: "600" }}>
          No Internet Connection
        </Text>
        <Text style={{ textAlign: "center", opacity: 0.57 }}>
          Your internet connection is currently not available. Please check or try again.
        </Text>
        <View style={{ display: "flex", alignItems: "center", top: height / 20 }}>
          <Button color="red" size="large" title="Try again" onClick={retryConnection} />
        </View>
      </View>
    </View>
  );
};

export default Disconnected;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.8,
    alignSelf: "center",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});