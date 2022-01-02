import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Colors from "../../constants/Colors";
import { AppText } from "../AppText";

interface AppButtonProps {
  title: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
  color?: string;
}

export default function AppButton({
  title,
  onPress,
  style,
  icon,
  color = Colors.orange,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={[
        style ? [style, styles.button] : styles.button,
        { backgroundColor: color },
      ]}
      onPress={onPress}
    >
      {icon && <View style={styles.iconBox}>{icon}</View>}
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.orange,
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.eclipse,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
  iconBox: {
    marginRight: 10,
  },
});
