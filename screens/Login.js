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

export default function LoginScreen() {
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
      <Button
        title="Forgot Password?"
        color="grey"
        onPress={() =>
          Alert.alert(
            "Change Password Clicked",
            "Do you want to change Password?",
            [
              { text: "Yes", onPress: () => console.log("Yes was clicked") },
              { text: "No", onPress: () => console.log("No was clicked") },
            ]
          )
        }
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then((user) => {
              console.log(user);
              // Signed in
              // ...
              alert("You are now logged in");
              navigation.navigate("SignedInScreen", { user });
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorMessage);
              alert("Sorry this account does not exist");
            });
        }}
      >
        <Text style={styles.LoginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <Button
        title="Create New Account"
        color="grey"
        onPress={() => navigation.navigate("Signup")}
      />
      <Button
        title="Go to Settings"
        color="grey"
        onPress={() => navigation.navigate("Settings")}
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
    marginTop: 20,
    backgroundColor: "lightblue",
    marginBottom: 10,
  },

  normalText: {
    fontSize: 16,
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

  LoginButtonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFF",
  },
});
