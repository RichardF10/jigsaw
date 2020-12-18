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
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalenderScreen from "./Calender";
import MeetingsScreen from "./Meetings";
import MedsScreen from "./Meds";
import PorfileScreen from "./Profile";

// export default function HomeScreen() {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go To Calender Screen"
//         color="grey"
//         onPress={() => navigation.navigate("Calender")}
//       />
//     </View>
//   );
// }

const BtmTab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <BtmTab.Navigator>
      <BtmTab.Screen name="Profile" component={PorfileScreen} />
      <BtmTab.Screen name="Meds" component={MedsScreen} />
      <BtmTab.Screen name="Groups" component={MeetingsScreen} />
      <BtmTab.Screen name="Calender" component={CalenderScreen} />
    </BtmTab.Navigator>
  );
};

export default HomeScreen;

// export function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }
