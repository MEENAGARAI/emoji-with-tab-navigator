import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import facebook from "./tab1";
import instagram from "./tab2";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Emoji_Search: { screen: facebook },
  Emoji_Use: { screen: instagram }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  
});
