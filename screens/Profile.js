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

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.ProfileText}>Profile Screen</Text>
      <Image style={styles.image} source={require("../assets/JohnSmith.jpg")} />

      <Text style={styles.normaltext}>
        John Smith - 32 Years Old - Diabetes
      </Text>

      <Text style={styles.BioHeading}>Bio: </Text>

      <Text style={styles.bioText}>
        Currently a secondary school teacher, I teach maths, physics and SPHE. I
        am a Family man, with 2 kids and wife. I drive a nissan juke 2014. Some
        of my current hobbies include playing the occasional game of golf, I'm
        not very good LOL, but I do try my best, also enjoy kayaking and
        spending time with my family. For my condition of diabetes, theres a few
        things I would struggle to manage in daily life, such as taking
        medication at certain times, monitoring my blood glucose and eating
        carefully.
      </Text>

      <TouchableOpacity
        style={styles.GoBackButton}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.LoginButtonText}>Log Out</Text>
      </TouchableOpacity>
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
    width: 170,
    height: 220,
    marginBottom: 40,
    marginTop: 100,
    //right: 80,
    borderRadius: 80,
    //bottom: 60,
  },

  ProfileText: {
    fontSize: 30,
    //borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 40,
    //width: 200,
    height: 100,
    marginTop: 30,
  },

  BioHeading: {
    fontSize: 25,
    //borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    //position: "absolute",
    //top: 40,
    //width: 200,
    //height: 100,
    //marginTop: 30,
  },

  bioText: {
    fontSize: 17,
    //borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    //position: "absolute",
    //top: 40,
    //width: 200,
    //bottom: 98,
    color: "grey",
    //right: 120,
    //top: 50,
    width: 300,
  },

  normaltext: {
    fontSize: 22,
    //borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    //position: "absolute",
    //top: 40,
    //width: 200,
    bottom: 40,
    //fontWeight: "bold",
    //color: "grey",
    marginTop: 30,
  },

  GoBackButton: {
    width: "70%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#c0c0c0",
    marginBottom: 10,
    //top: 150,
  },

  LoginButtonText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
