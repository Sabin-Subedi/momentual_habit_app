import { Formik } from "formik";
import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AppText } from "../components/AppText";
import Screen from "../components/Screen";
import Colors from "../constants/Colors";
import SignupVector from "../vectors/SignupVector";
import * as Yup from "yup";
import AppInput from "../components/AppInput";
import ErrorMessage from "../components/AppForm/ErrorMessage";
import AppCheckBox from "../components/AppCheckBox";
import AppButton from "../components/AppButton";
import Divider from "../components/Divider";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import ForgotVector from "../vectors/ForgotVector";

interface SignupFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(8).required().label("Password"),
  username: Yup.string().required().label("Username"),
});

export default function ForgotScreen({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) {
  return (
    <Screen style={styles.container}>
      <View style={styles.innerContainer}>
        <ForgotVector />
        <View style={styles.formContainer}>
          <AppText style={styles.title}>
            Enter your registered email below to receive password reset
            instruction
          </AppText>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={signUpValidationSchema}
          >
            {({
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              handleSubmit,
            }) => (
              <>
                <AppInput
                  icon="mail"
                  placeholder="Email Address"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  textContentType="emailAddress"
                  autoCapitalize="none"
                />
                <ErrorMessage
                  error={errors["email"]}
                  visible={errors["email"] && touched["email"] ? true : false}
                />

                <AppButton
                  style={styles.submitButton}
                  onPress={handleSubmit}
                  title="Send Reset Link"
                />
              </>
            )}
          </Formik>
        </View>
      </View>

      <AppText style={styles.infoText}>
        Remember Password?{" "}
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <AppText style={{ fontWeight: "800" }}>Login</AppText>
        </TouchableWithoutFeedback>
      </AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    alignItems: "center",
    paddingTop: 25,
    justifyContent: "space-between",
    padding: 10,
    paddingBottom: 20,
  },
  innerContainer: {
    alignItems: "center",
    width: "100%",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginTop: 40,
  },
  title: {
    color: Colors.eclipse,
    textAlign: "center",
    fontWeight: "400",
    fontSize: 15,
    marginBottom: 20,
  },
  submitButton: {
    marginVertical: 10,
  },

  infoText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 15,
    color: Colors.eclipse,
    fontWeight: "500",
  },
});
