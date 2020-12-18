import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { firebaseConfig } from "./config/firebase.js";
import firebase from "firebase";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SignUpScreen from "./screens/SignUp";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import CalenderScreen from "./screens/Calender";
import MeetingsScreen from "./screens/Meetings";
import MedsScreen from "./screens/Meds";
import PorfileScreen from "./screens/Profile";

// import MyTabs from "./screens/HomeScreen";

//var user = firebase.auth().currentUser;
//if (user) {
// User is signed in.
//} else {
// No user is signed in.
//}

function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <Button
        title="Go Back"
        color="grey"
        onPress={() => navigation.navigate("SignedInScreen")}
      />
    </View>
  );
}

function LandingScreen({ navigation, route }) {
  const { user } = route.params.user;
  console.log(user);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{user.email}</Text>
    </View>
  );
}

const Stack = createStackNavigator();
// const BtmTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        {/* <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} /> */}
        <Stack.Screen name="SignedInScreen" component={HomeScreen} />
        {/* <Stack.Screen name="Meetings" component={MeetingsScreen} />
        <Stack.Screen name="Calender" component={CalenderScreen} />
        <Stack.Screen name="Medications" component={MedsScreen} />
        <Stack.Screen name="Profile" component={PorfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const App1 = () => {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// };
// export default App;
