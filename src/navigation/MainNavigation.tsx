import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import LogInScreen from '../screens/LogInScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FeedsScreen from '../screens/FeedsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function MainNavigation() {
  function MainTabNavigation() {
    return (
      <Tab.Navigator initialRouteName="FeedsScreen">
        <Tab.Screen name="FeedsScreen" component={FeedsScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }

  const navigationLogIn = (
    <Stack.Navigator initialRouteName="LaunchScreen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LaunchScreen"
        component={LaunchScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LogInScreen"
        component={LogInScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerLeft: () => null,
        }}
        name="MainTabNavigation"
        component={MainTabNavigation}
      />
    </Stack.Navigator>
  );

  return navigationLogIn;
}
