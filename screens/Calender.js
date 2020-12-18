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

export default function Calender() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Calender Screen</Text>
      <Button
        title="Go To Meetings Screen"
        color="grey"
        onPress={() => navigation.navigate("Meetings")}
      />
    </View>
  );
}
