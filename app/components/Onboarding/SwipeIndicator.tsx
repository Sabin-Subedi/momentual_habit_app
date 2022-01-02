import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function SwipeIndicator({
  currentActivePageIndex,
  totalPages,
}: {
  currentActivePageIndex: number;
  totalPages: number;
}) {
  return (
    <View style={styles.container}>
      {Array.from(Array(totalPages).keys()).map((pageIndex) => (
        <View key={pageIndex} style={styles.indicatorContainer}>
          <View
            style={
              currentActivePageIndex === pageIndex
                ? styles.active
                : styles.indicator
            }
          ></View>
          {currentActivePageIndex === pageIndex && (
            <View style={styles.activeInner} />
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 0,
    alignItems: "center",
  },
  indicatorContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 5,
  },
  indicator: {
    width: 11,
    height: 11,
    borderRadius: 10,
    backgroundColor: Colors.yellowLight,
    position: "relative",
    zIndex: 5,
  },
  active: {
    width: 17,
    height: 17,
    borderRadius: 15,
    backgroundColor: Colors.eclipse,
    opacity: 0.3,
    zIndex: -1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  activeInner: {
    position: "absolute",
    width: "70%",
    height: "50%",
    borderRadius: 50,
    backgroundColor: Colors.eclipse,
    opacity: 1,
    zIndex: 1,
  },
});
