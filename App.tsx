import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import Screen from "./app/components/Screen";
import NavigationTheme from "./app/constants/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

import Firebase, { FirebaseContext } from "./firebase";

export default function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </FirebaseContext.Provider>
  );
}
