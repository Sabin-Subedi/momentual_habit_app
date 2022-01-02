import React from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../../constants/Colors";
import { OnBoardingData } from "../../types/Onboarding";
import { AppText } from "../AppText";

interface OnboardingItemProps {
  item: OnBoardingData;
}

export default function OnboardingItem({ item }: OnboardingItemProps) {
  return (
    <View style={styles.container}>
      <View>
        <AppText style={styles.title}>{item.title1}</AppText>
        <AppText style={styles.title}>{item?.title2}</AppText>
      </View>
      {item.image && <Image source={item.image} style={styles.image} />}
      <AppText style={styles.subTitle}>
        We can <AppText style={styles.highlight}>help you</AppText> to be a
        better version of <AppText style={styles.highlight}>yourself.</AppText>
      </AppText>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width,
    paddingTop: 50,
    padding: 25,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    maxHeight: "100%",
    flex: 1,
  },
  title: {
    color: Colors.eclipse,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    textTransform: "uppercase",
  },
  image: {
    width: "100%",
    marginVertical: 10,
  },
  subTitle: {
    color: Colors.eclipse,
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "600",
  },
  onBoardButton: {},
  highlight: {
    color: Colors.yellow,
  },
});
