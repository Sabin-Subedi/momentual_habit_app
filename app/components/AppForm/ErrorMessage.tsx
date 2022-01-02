import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { AppText } from "../AppText";

export default function ErrorMessage({
  error,
  visible,
}: {
  error: any;
  visible: boolean;
}) {
  if (!visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.danger,
  },
});
