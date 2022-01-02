import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../types";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const Tab = createNativeStackNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Login"
  >
    <Tab.Screen name="Welcome" component={WelcomeScreen} />
    <Tab.Screen name="Login" component={LoginScreen} />
    <Tab.Screen name="Register" component={RegisterScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
