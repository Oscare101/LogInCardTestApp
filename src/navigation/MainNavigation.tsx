import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import LogInScreen from '../screens/LogInScreen';
import MainTopNavigation from './MainTopNavigation';

const Stack = createStackNavigator();

export default function MainNavigation() {
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
        name="MainTopNavigation"
        component={MainTopNavigation}
      />
    </Stack.Navigator>
  );

  return navigationLogIn;
}
