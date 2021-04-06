import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//decalring the drawer layout with screens
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";


//to call the specific screen and route the path
export default function App() {
  
  return <Router />;
}
//defining the drawer layout with home screen as default
const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen: Home,
    AboutScreen: About,
    ContactScreen: Contact
  },
  {
    initialRouteName: "HomeScreen",
    drawerBackgroundColor: "dodgerblue",
    contentOptions: {
      activeTintColor: "red"
    }
  }
);
//to switch screens from the drawer menu
const Router = createAppContainer(
  createSwitchNavigator({
    // This is where your Auth screens would be handled.
    DrawerNavigation
  })
);

//styles for the entire screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
