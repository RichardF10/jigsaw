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
import MedicineList from "../components/medicineList";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Metformin",
    subtitle: "Dosage: Once daily",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Sulfonylureas",
    subtitle: "Dosage: 4 times daily",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Meglitinides",
    subtitle: "Dosage: 1 every 2 days",
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Thiazolidinediones",
    subtitle: "Dosage: Once a week",
  },
  {
    id: "78694a0f-3da1-471f-bd96-145571e29d72",
    title: "DPP-4 inhibitors",
    subtitle: "Dosage: 3 times a week",
  },
  {
    id: "88694a0f-3da1-471f-bd96-145571e29d72",
    title: "GLP-1 receptor agonists",
    subtitle: "Dosage: Twice daily",
  },
  {
    id: "98694a0f-3da1-471f-bd96-145571e29d72",
    title: "SGLT2 inhibitors",
    subtitle: "Dosage: Twice a week",
  },
];

export default function Meds() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.ProfileText}>Medication Taken</Text>
      <MedicineList data={data} />
    </View>
  );
}
const styles = StyleSheet.create({
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
    marginBottom: 30,
    paddingBottom: 30,
    fontWeight: "bold",
  },
});
