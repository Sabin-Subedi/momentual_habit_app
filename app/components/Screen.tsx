import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaViewProps } from "react-native-safe-area-context";
import Constants from "expo-constants";

const Screen: React.FC = ({ children, style }: SafeAreaViewProps) => {
  return (
    <SafeAreaView style={[style, styles.safeArea]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
