import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AppButton from "../components/AppButton";
import { AppText } from "../components/AppText";
import Screen from "../components/Screen";
import Colors from "../constants/Colors";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Divider from "../components/Divider";
import AppInput from "../components/AppInput";
import * as Yup from "yup";
import { Formik } from "formik";
import ErrorMessage from "../components/AppForm/ErrorMessage";
import { NavigationProp } from "@react-navigation/native";

interface LoginFormValues {
  email: string;
  password: string;
}

const loginValdationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email("Please enter a valid mail")
    .label("Email"),
  password: Yup.string().required().label("Password"),
});

export default function LoginScreen({
  navigation,
}: {
  navigation: NavigationProp<any, any>;
}) {
  const initialValues: LoginFormValues = { email: "", password: "" };
  return (
    <Screen>
      <ImageBackground
        source={require("../assets/images/main.png")}
        style={styles.image}
      >
        <View style={styles.contentContainer}>
          <AppText style={styles.title}>Welcome to</AppText>
          <AppText style={styles.title}>momentual habits</AppText>
          <View style={styles.socialIconBox}>
            <AppButton
              color={Colors.white}
              title="Continue with Google"
              style={styles.socialIcon}
              icon={
                <Image
                  source={require("../assets/images/google.png")}
                  style={styles.google}
                />
              }
            ></AppButton>
            <AppButton
              color={Colors.white}
              title="Continue with Google"
              style={styles.socialIcon}
              icon={<FontAwesome5 name="facebook" size={24} color="#1772EA" />}
            ></AppButton>
          </View>
        </View>
        <LinearGradient
          colors={["rgba(255, 243, 233, 0) ", "#FFF3E9"]}
          locations={[0, 0.65]}
          style={styles.background}
        />
      </ImageBackground>
      <View style={styles.formContainer}>
        <AppText style={styles.formTitle}>Login with email</AppText>
        <Divider />
        <View style={styles.formInputContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValdationSchema}
            onSubmit={(values: Object) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              values,
              touched,
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
                  separatorColor={Colors.orange}
                />
                <ErrorMessage
                  error={errors["email"]}
                  visible={errors["email"] && touched["email"] ? true : false}
                />
                <AppInput
                  onChangeText={handleChange("password")}
                  placeholder="Password"
                  icon="lock"
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                  autoCapitalize="none"
                />
                <ErrorMessage
                  error={errors["password"]}
                  visible={
                    errors["password"] && touched["password"] ? true : false
                  }
                />
                <AppButton
                  style={styles.button}
                  title="Login"
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Welcome")}
          >
            <AppText
              style={[styles.infoText, { textDecorationLine: "underline" }]}
            >
              Forgot Password?
            </AppText>
          </TouchableWithoutFeedback>

          <AppText style={styles.infoText}>
            Don't have an account?{" "}
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Register")}
            >
              <AppText style={{ fontWeight: "800" }}>Sign up</AppText>
            </TouchableWithoutFeedback>
          </AppText>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    height: "55%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    height: "100%",
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 50,
  },
  title: {
    zIndex: 2,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600",
    textTransform: "uppercase",
    color: Colors.eclipse,
  },
  socialIcon: {
    marginVertical: 5,
  },
  socialIconBox: {
    marginTop: 30,
  },
  contentContainer: {
    zIndex: 2,
    padding: 20,
    width: "100%",
    paddingTop: 140,
  },
  google: {
    width: 24,
    height: 24,
  },
  formContainer: {
    height: "45%",
    backgroundColor: "#fff",
    zIndex: 2,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -25,
    paddingVertical: 18,
  },
  formInputContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  formTitle: {
    fontSize: 18,
    textAlign: "center",
    color: Colors.eclipse,
    fontWeight: "500",
    marginBottom: 13,
  },
  button: {
    marginTop: 10,
  },
  infoText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    color: Colors.eclipse,
    fontWeight: "500",
  },
});
