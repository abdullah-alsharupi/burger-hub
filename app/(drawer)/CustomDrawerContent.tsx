import SignOutUser from "@/src/components/auth/LogOut";
import Button from "@/src/components/ui/Button";
import ShowDialog from "@/src/components/ui/showDialog";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";

const CustomDrawerContent: React.FC<{ navigation?: any }> = ({ navigation }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleCancel = () => {
    setDialogOpen(false);
  };
  const handleConfirm = () => {
    SignOutUser();
    setDialogOpen(false);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.ImageContainer}>
            <Image
              source={require("@/assets/images/drawer.png")}
              style={styles.logo}
            />
          </View>

          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("home")}
        >
          <Image
            source={require("@/assets/icons/home1.png")}
            style={styles.Icon}
          />
          <Text style={styles.menuText}>home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={require("@/assets/icons/gg_profile.png")}
            style={styles.Icon}
          />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("orders")}
        >
          <Image
            source={require("@/assets/icons/icons8_buy.png")}
            style={styles.Icon}
          />

          <Text style={styles.menuText}>Your Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>navigation.navigate("payments")}
        >
          <Image
            source={require("@/assets/icons/ic_outline-local-offer.png")}
            style={styles.Icon}
          />

          <Text style={styles.menuText}>Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("favorites")}
        >
          <Image
            source={require("@/assets/icons/ic_outline-sticky-note-2.png")}
            style={styles.Icon}
          />

          <Text style={styles.menuText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => setDialogOpen(true)}
        >
          <ShowDialog
            open={dialogOpen}
            setOpen={setDialogOpen}
            title="Log Out"
            description="Are you sure you want to log out?"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            trigger={undefined}
          />
          <Text style={styles.signOutText}>Sign out →</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AF042C",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    justifyContent: "space-between",
    top: 56,
  },
  ImageContainer: {
    width: 73,
    height: 73,
    backgroundColor: "#FFFFFF",
    color: "#FFFFFF",
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomStartRadius: 50,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  logo: {
    width: 50,
    height: 50,
    top: 10,
    left: 10,
  },
  backButton: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  menuItem: {
    flexDirection: "row",
    padding: 20,
    top: 40,
  },
  Icon: {
    width: 24,
    height: 24,
    right: 10,
    top: 1,
  },
  menuText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  signOutButton: {
    marginTop: "auto",
    padding: 15,
    top: 150,
  },
  signOutText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
