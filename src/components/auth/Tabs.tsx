import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LogIn from "./LogIn/LogIn";import Button from "../ui/Button";
import SignUp from "./SignUp/SignUp";

const Tabs = () => {
        const [selectedTab, setSelectedTab] = useState("Login");

        return (
            <View style={styles.container}>
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        onPress={() => setSelectedTab("Login")}
                    style={styles.tab}
                    >
                        <Text style={styles.tabText}>Login</Text>
                        {selectedTab === "Login" && <View style={styles.underline} />}
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setSelectedTab("Sign Up")}
                        style={styles.tab}
                    >
                        <Text style={styles.tabText}>Sign Up</Text>
                        {selectedTab === "Sign Up" && <View style={styles.underline} />}
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                {selectedTab === "Sign Up" && <SignUp  />}
                {selectedTab === "Login" && <LogIn />}
                </View> 
            </View>
        
        );

    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
             alignItems: 'baseline',
            width:"110%",
            position:'relative',
             height:200,
 
          },
    
        tabContainer: {
            display:'flex',
            flexDirection: "row",
            marginBottom: 0,
            width:'90%',
            justifyContent:'space-around',
            position:'relative',
    },
        tab: {
            padding: 5,
            alignItems: "center",
            width:'40%',
            top:'-15%',
         },
        tabText: {
            fontSize: 22,
            color: "#00000",
        },
        underline: {
            marginTop: 15,
            height: 3,
            width: 134,
            backgroundColor: "#AF042C",
            borderRadius:40,

        },
        content: {
            height:'85%',
            width:'100%',
             top:'-12%',
            
        },
        contentText: {
            fontSize: 24,
        },
    });

    

    export default Tabs;