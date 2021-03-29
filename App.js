import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import searchScreen from './searchScreen';
import transactionScreen from './transactionScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { render } from 'react-dom';

export default function App() {
  render(){
    return(
      <appContainer></appContainer>
    );
  }
}

const tabNavigator=createBottomTabNavigator({
  transaction:transactionScreen,
  search:searchScreen
})

const appContainer=createAppContainer({
  tabNavigator
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
