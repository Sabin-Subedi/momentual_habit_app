import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";

import Constants from "expo-constants";
import { SafeAreaViewProps } from "react-native-safe-area-context";

function Screen({ children, style }: SafeAreaViewProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[style, styles.container]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default Screen;
