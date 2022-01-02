import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { AppText } from "./AppText";

export default function Divider({
  color = "#FFF3E9",
  size = 2,
  style,
  vertical,
  textStyle,
  text,
}: {
  color?: string;
  size?: number;
  style?: any;
  vertical?: boolean;
  text?: string;
  textStyle?: Object;
}) {
  if (text) {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={[
            {
              height: vertical ? "100%" : size,
              width: vertical ? size : "100%",
              backgroundColor: color,
              marginRight: vertical ? 15 : 0,
              flex: 1,
            },
            style,
          ]}
        ></View>
        <AppText style={[{ marginHorizontal: 5 }, textStyle]}>{text}</AppText>
        <View
          style={[
            {
              height: vertical ? "100%" : size,
              width: vertical ? size : "100%",
              backgroundColor: color,
              marginRight: vertical ? 15 : 0,
              flex: 1,
            },
            style,
          ]}
        ></View>
      </View>
    );
  }

  return (
    <>
      <View
        style={[
          {
            height: vertical ? "100%" : size,
            width: vertical ? size : "100%",
            backgroundColor: color,
            marginRight: vertical ? 15 : 0,
          },
          style,
        ]}
      ></View>
      {text && (
        <>
          <AppText style={{}}>{text}</AppText>
          <View
            style={[
              {
                height: vertical ? "100%" : size,
                width: vertical ? size : "100%",
                backgroundColor: color,
                marginRight: vertical ? 15 : 0,
              },
              style,
            ]}
          ></View>
        </>
      )}
    </>
  );
}
