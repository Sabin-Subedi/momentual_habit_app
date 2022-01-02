import React from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Colors from "../../constants/Colors";
import { AppText } from "../AppText";

export default function AppTextButton({
  style,
  onPress,
  children,
}: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <AppText style={styles.text}>{children}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.eclipse,
    fontSize: 18,
    fontWeight: "600",
  },
});
