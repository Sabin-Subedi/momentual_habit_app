import { ImageSourcePropType } from "react-native";

export interface OnBoardingData {
  id: string;
  title1: string;
  title2?: string;
  description?: string;
  image?: ImageSourcePropType;
}
