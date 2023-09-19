/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {customHeaderStyle} from './Navigator';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

// Tab Screens
import Home from './../screens/main/Home';
import Menu from './../screens/main/Menu';
import {RenderIcon} from '../components';
import {useAppThemeContext} from '../hooks/useAppTheme';

// Tab
const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  HomeScreen: undefined;
  MenuScreen: undefined;
};

export type RootStackRoute<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>['route'];

const MenuStack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<RootStackParamList>();

// Navigation Stack for Hospital History screen
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: customHeaderStyle,
        headerTintColor: 'white',
        headerBackTitleVisible: false,
        headerLeft: () => null,
        headerTitleAlign: 'center',
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        options={{headerShown: false}}
        component={Home}
      />
    </HomeStack.Navigator>
  );
};

// Navigation Stack for Hospital History screen
const MenuNavigator = () => {
  return (
    <MenuStack.Navigator
      screenOptions={{
        headerStyle: customHeaderStyle,
        headerTintColor: 'white',
        headerBackTitleVisible: false,
        headerLeft: () => null,
        headerTitleAlign: 'center',
      }}>
      <MenuStack.Screen
        name="MenuScreen"
        options={{headerShown: false}}
        component={Menu}
      />
    </MenuStack.Navigator>
  );
};

// Navigation Stack for Tab
const TabNavigator = () => {
  const {colors} = useAppThemeContext();
  const TabBarImage = ({focused, iconName, color}) => {
    return (
      <>
        <View
          style={[
            styles.barStyle,
            {
              backgroundColor: focused ? colors.lightPrimary : 'transparent',
            },
          ]}
        />
        <RenderIcon name={iconName} size={20} color={color} />
      </>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Home'}
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <TabBarImage focused={focused} iconName="FaHome" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Menu'}
        component={MenuNavigator}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({focused, color}) => (
            <TabBarImage focused={focused} iconName="FaUser" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    height: 2,
    width: '100%',
    position: 'absolute',
    top: 0,
  },
});

export default TabNavigator;
