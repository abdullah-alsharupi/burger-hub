import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";
import { MyBottomTabs } from "../tabs/BottomTabs";

import ProfileScreen from "./pofile/Index";
import BarUI from "@/src/components/ui/BarUi";
import UserPaymentScreen from "@/src/components/paymentMethod/userPaymentScreen";
import OrderHistoryScreen from "@/src/components/oder-history/OrderHistoryScreen";
import Favorites from "@/src/components/Favorite/Favorite";
import Disconnected from "../disconnected";
import NetInfo from "@react-native-community/netinfo";
import { useSessionStore } from "@/src/store/useSessionStore";
import { View, Text } from "react-native";

const Drawer = createDrawerNavigator();

const Main = () => {
  const isSessionExist = useSessionStore().session;

  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unSubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected);
    });
    return unSubscribe;
  }, []);

  if (isConnected === null) {
    return null;
  }
  if (!isSessionExist) {
    return (
      <View>
        <Text>not authorized</Text>
      </View>
    );
  }
  return (
    <NavigationContainer independent={true}>
      {isConnected ? (
        <Drawer.Navigator
          screenOptions={{ drawerStyle: { width: 1000 } }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          initialRouteName="home"
        >
          <Drawer.Screen
            name="home"
            component={MyBottomTabs}
            options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ navigation }) => ({
              headerShown: true,
              headerLeft: () => (
                <BarUI onClick={() => navigation.toggleDrawer()} />
              ),
              title: "Profile",
              headerTitleAlign: "center",
            })}
          />
          <Drawer.Screen
            name="payments"
            component={UserPaymentScreen}
            options={({ navigation }) => ({
              headerShown: true,
              headerLeft: () => (
                <BarUI onClick={() => navigation.toggleDrawer()} />
              ),
              title: "Payment Methods",
              headerTitleAlign: "center",
            })}
          />
          <Drawer.Screen
            name="orders"
            component={OrderHistoryScreen}
            options={({ navigation }) => ({
              headerShown: true,
              headerLeft: () => (
                <BarUI onClick={() => navigation.toggleDrawer()} />
              ),
              title: "Orders",
              headerTitleAlign: "center",
            })}
          />
          <Drawer.Screen
            name="favorites"
            component={Favorites}
            options={({ navigation }) => ({
              headerShown: true,
              headerLeft: () => (
                <BarUI onClick={() => navigation.toggleDrawer()} />
              ),
              title: "Favorites",
              headerTitleAlign: "center",
            })}
          />
        </Drawer.Navigator>
      ) : (
        <Disconnected />
      )}
    </NavigationContainer>
  );
};

export default Main;
