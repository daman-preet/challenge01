import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {MainNavigationScreen, customHeaderStyle} from './Navigator';

import TabNavigator from './TabNavigator';

// Root stack navigator
const RootStack = createStackNavigator();

// Main Screens Navigator
const MainStack = createStackNavigator();

// Navigation Stack for Main Screens
const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerBackTitleVisible: false,
        headerStyle: customHeaderStyle,
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}
      initialRouteName={MainNavigationScreen.Home}>
      <MainStack.Screen
        name={'Home Tab Screen'}
        options={{headerShown: false, gestureEnabled: false}}
        component={TabNavigator}
      />
    </MainStack.Navigator>
  );
};

// Navigation Stack for Root Screens
const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}>
      <RootStack.Screen
        name={'Main'}
        options={{headerShown: false}}
        component={MainNavigator}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
