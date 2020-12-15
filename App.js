import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { firebaseConfig } from './config/firebase.js';
import firebase from 'firebase';

import SignUpScreen from './screens/SignUp';
import LoginScreen from './screens/Login';






//var user = firebase.auth().currentUser;
//if (user) {
  // User is signed in.
//} else {
  // No user is signed in.
//}

function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button 
        title="Go Back" 
        color="grey"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
       <Stack.Screen name="Hone" component={LoginScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
     </Stack.Navigator>
    </NavigationContainer>

    
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={LoginScreen} />
    //     <Tab.Screen name="Settings" component={SettingsScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    
  );
}