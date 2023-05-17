import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignInScreen';
import SignOutScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Sign In' component={SignInScreen} />
      <Stack.Screen name='Sign Up' component={SignOutScreen} />
    </Stack.Navigator>
  );
}
