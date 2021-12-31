import { StyleSheet, Text, TextProps } from "react-native";

export function AppText(props: TextProps) {
  return <Text {...props} style={[props.style, styles.text]} />;
}

const styles = StyleSheet.create({
  text: {},
});
