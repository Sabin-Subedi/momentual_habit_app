import React, { useCallback, useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { OnBoardingData } from "../../types/Onboarding";
import AppButton from "../AppButton";
import AppTextButton from "../AppButton/AppTextButton";
import OnboardingItem from "./OnboardingItem";
import SwipeIndicator from "./SwipeIndicator";

interface OnboardingProps {
  data: OnBoardingData[];
  onGetStarted: () => void;
}

export default function Onboarding({ data, onGetStarted }: OnboardingProps) {
  const [currentActivePageIndex, setCurrentActivePageIndex] = useState(0);
  const swipeRef = useRef<FlatList>(null);

  const handleNextPress = () => {
    currentActivePageIndex < data.length - 1 &&
      swipeRef.current &&
      swipeRef.current.scrollToIndex({
        index: currentActivePageIndex + 1,
        animated: true,
      });
  };
  const handleSkipPress = () => {
    swipeRef.current &&
      swipeRef.current.scrollToIndex({
        index: data.length - 1,
        animated: false,
      });
  };

  const handleSwipe = useCallback(({ viewableItems }) => {
    setCurrentActivePageIndex(viewableItems[0].index);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={swipeRef}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        horizontal
        onViewableItemsChanged={handleSwipe}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <OnboardingItem item={item} />}
      />
      {currentActivePageIndex < data.length - 1 ? (
        <View style={styles.controlContainer}>
          <AppTextButton onPress={handleSkipPress}>Skip</AppTextButton>
          <SwipeIndicator
            currentActivePageIndex={currentActivePageIndex}
            totalPages={data.length}
          />
          <AppTextButton onPress={handleNextPress}>Next</AppTextButton>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <AppButton title="Get Started" onPress={onGetStarted} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  controlContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    padding: 40,
    // marginTop: 30,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
});
