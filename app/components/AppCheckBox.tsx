import Checkbox, { CheckboxProps } from "expo-checkbox";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { AppText } from "./AppText";

interface AppCheckBoxProps extends CheckboxProps {
  label: string;
  color?: string;
}

export default function AppCheckBox({
  label,
  color = Colors.orange,
  ...props
}: AppCheckBoxProps) {
  return (
    <View style={styles.container}>
      <Checkbox color={color} style={styles.checkbox} {...props} />
      <AppText style={styles.text}>{label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    backgroundColor: Colors.orange,
    borderRadius: 5,
    marginRight: 10,
    marginVertical: 10,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: Colors.eclipse,
    fontWeight: "500",
  },
});
