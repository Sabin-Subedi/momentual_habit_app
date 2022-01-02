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

export default function RegisterScreen({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) {
  return (
    <Screen style={styles.container}>
      <SignupVector />
      <AppText style={styles.title}>Create your account</AppText>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          username: "",
          checked: false,
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
          setFieldValue,
          handleSubmit,
        }) => (
          <>
            <AppInput
              icon="user"
              placeholder="Username"
              autoCorrect={false}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              autoCapitalize="none"
              separator
              style={styles.formInput}
            />
            <ErrorMessage
              error={errors["username"]}
              visible={errors["username"] && touched["username"] ? true : false}
            />
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
              separator
              style={styles.formInput}
            />
            <ErrorMessage
              error={errors["email"]}
              visible={errors["email"] && touched["email"] ? true : false}
            />
            <AppInput
              icon="lock"
              placeholder="Password"
              autoCorrect={false}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              autoCapitalize="none"
              secureTextEntry
              separator
              style={styles.formInput}
            />
            <ErrorMessage
              error={errors["password"]}
              visible={errors["password"] && touched["password"] ? true : false}
            />
            <AppCheckBox
              value={values.checked}
              onValueChange={() => setFieldValue("checked", !values.checked)}
              label="Email me about special pricing and more"
            />
            <AppButton
              style={styles.submitButton}
              onPress={handleSubmit}
              title="Create Account"
            />
          </>
        )}
      </Formik>
      <Divider
        color={Colors.eclipse}
        text="Or sign in with"
        textStyle={styles.text}
        style={styles.divider}
        size={1}
      />
      <View style={styles.socialLogin}>
        <AppButton
          color={Colors.white}
          title="Google"
          style={styles.socialButton}
          icon={
            <Image
              source={require("../assets/images/google.png")}
              style={styles.google}
            />
          }
        ></AppButton>
        <AppButton
          color={Colors.white}
          title="Facebook"
          style={styles.socialButton}
          icon={<FontAwesome5 name="facebook" size={24} color="#1772EA" />}
        ></AppButton>
      </View>
      <AppText style={styles.infoText}>
        Already have an account?{" "}
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
    padding: 20,
    paddingTop: 25,
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
    marginVertical: 10,
    fontWeight: "700",
    color: Colors.eclipse,
  },
  formInput: {
    backgroundColor: Colors.white,
  },
  submitButton: {
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    color: Colors.eclipse,
    fontWeight: "500",
    opacity: 0.5,
  },
  divider: {
    opacity: 0.5,
  },
  socialLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  google: {
    width: 24,
    height: 24,
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  infoText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 15,
    color: Colors.eclipse,
    fontWeight: "500",
  },
});
