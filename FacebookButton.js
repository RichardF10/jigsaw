import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FacebookSocialButton } from "react-native-social-buttons";
import { GoogleSocialButton } from "react-native-social-buttons";
import { StyleSheet, ActivityIndicator, Text, Button, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <FacebookSocialButton onPress={() => alert("Button Clicked") } />
        <GoogleSocialButton onPress={() => alert("Button Clicked") } />
      </View>
      

    );
  }
};