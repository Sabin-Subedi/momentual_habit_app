import { transform } from "@babel/core";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import Divider from "./Divider";

interface AppInputProps extends TextInputProps {
  icon?: any;
  separator?: boolean;
  separatorColor?: string;
}

export default function AppInput({
  style,
  icon,
  separator = false,
  onBlur,
  secureTextEntry,
  separatorColor,
  ...props
}: AppInputProps) {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[style, styles.container]}>
      <View style={styles.iconBox}>
        {icon && (
          <Feather
            name={icon}
            style={[
              focus
                ? {
                    color: Colors.orange,
                  }
                : {
                    color: Colors.eclipse,
                    opacity: 0.5,
                  },
            ]}
            size={24}
          />
        )}
      </View>
      {separator && <Divider color={separatorColor} vertical />}
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={styles.textInput}
          onFocus={() => setFocus(true)}
          onBlur={(e) => {
            setFocus(false);
            onBlur && onBlur(e);
          }}
          secureTextEntry={secureTextEntry ? !showPassword : false}
        />
      </View>
      {secureTextEntry &&
        (!showPassword ? (
          <TouchableWithoutFeedback
            style={styles.passwordIcon}
            onPress={() => setShowPassword(true)}
          >
            <Feather name="eye-off" color={Colors.eclipse} size={24} />
          </TouchableWithoutFeedback>
        ) : (
          <TouchableOpacity
            style={styles.passwordIcon}
            onPress={() => setShowPassword(false)}
          >
            <Feather name="eye" color={Colors.eclipse} size={24} />
          </TouchableOpacity>
        ))}
    </View>
  );
}

AppInput.defaultProps = {
  style: {
    backgroundColor: Colors.orangeLight,
  },
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 5,
    paddingRight: 15,
  },
  textInput: {
    flex: 1,
    color: Colors.orange,
    fontWeight: "500",
    fontSize: 16,
  },
  iconBox: {
    padding: 20,
  },
  icon: {},

  inputContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  passwordIcon: {
    zIndex: 2,
  },
});
