import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import Constants from "expo-constants";
import Onboarding from "../components/Onboarding/Onboarding";
import {
  NavigationAction,
  NavigationProp,
  NavigationState,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const DATA = [
  {
    id: "1",
    title1: "Welcome to",
    title2: "momentual habits",
    image: require("../assets/images/onboarding_1.png"),
  },
  {
    id: "2",
    title1: "Create new",
    title2: "habit easily",
    image: require("../assets/images/onboarding_2.png"),
  },
  {
    id: "3",
    title1: "Keep track of your",
    title2: "progress",
    image: require("../assets/images/onboarding_3.png"),
  },
  {
    id: "4",
    title1: "join a supportive",
    title2: "community",
    image: require("../assets/images/onboarding_4.png"),
  },
];

export default function WelcomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) {
  const handleGetStarted = () => {
    navigation.navigate("Login");
  };

  return (
    <Screen>
      <Onboarding data={DATA} onGetStarted={handleGetStarted} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
