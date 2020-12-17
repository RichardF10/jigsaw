import { StatusBar } from "expo-status-bar";
//import React from 'react';
import React, { useState } from "react";
import * as rn from "react-native";
import {
  Button,
  TextInput,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { FacebookSocialButton } from "react-native-social-buttons";
import { GoogleSocialButton } from "react-native-social-buttons";
import firebase from "./firebaseClient";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

export default function SignUpScreen() {
  //const handlePress = () => console.log("Text Pressed");
  const navigation = useNavigation();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/jigsaw_logo.jpg")}
      />
      <Text style={styles.SignText}> SIGN UP </Text>
      <Text style={styles.normalText}> Email Address: </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.InputText}
          placeholder="Enter your Email Address"
          placeholderTextColor="#003f5c"
          secureTextEntry={false}
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <Text style={styles.normalText}> Password: </Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.InputText}
          placeholder="Enter your Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)

            .then((user) => {
              console.log(user);
              // Signed in
              // ...
              navigation.navigate("LandingScreen", { user });
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log();
              alert(errorMessage);
              // ..
            });
        }}
      >
        <Text style={styles.LoginButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <Button
        title="Go Back"
        color="grey"
        onPress={() => navigation.goBack()}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 100,

    height: 170,

    marginBottom: 20,
  },

  loginButton: {
    width: "70%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "lightblue",
    marginBottom: 20,
  },

  normalText: {
    fontSize: 16,
  },

  regText: {
    fontSize: 14,
    marginBottom: 10,
    color: "red",
  },

  SignText: {
    fontSize: 25,
    color: "red",
    marginBottom: 20,
  },

  InputText: {
    fontSize: 17,
    //borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
    //backgroundColor: "red",
    //borderColor: "red",
    //borderBottomColor: "blue",
    height: 50,
    width: "60%",
  },

  inputViewSocial: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 30,
    //backgroundColor: "red",
    //borderColor: "red",
    //borderBottomColor: "blue",
    height: 50,
    width: "60%",
  },

  LoginButtonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
