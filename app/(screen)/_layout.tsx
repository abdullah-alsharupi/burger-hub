  import React, { useEffect } from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
 
 

    return (
        <Stack screenOptions={{ headerShown: false,headerStyle:{backgroundColor:'black'} }}>
          <Stack.Screen name="items" options={{ headerShown: false }} />
         </Stack>
      );
};

export default RootLayout;