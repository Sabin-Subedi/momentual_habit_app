import { DefaultTheme } from "@react-navigation/native";
import Colors from "./Colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.white,
  },
};
