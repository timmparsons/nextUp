import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignInScreen';
import SignOutScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import MyMoviesScreen from '../screens/MyMoviesScreen';
import RandomScreen from '../screens/RandomScreen';
import MovieScreen from '../screens/MovieScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Sign In' component={SignInScreen} />
      <Stack.Screen name='Sign Up' component={SignOutScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen
        name='Movie Screen'
        component={MovieScreen}
        options={{ title: 'Movie Screen' }}
      />
      <Stack.Screen
        name='My Movies'
        component={MyMoviesScreen}
        options={{ title: 'tims movies' }}
      />
      <Stack.Screen
        name='Random picks'
        component={RandomScreen}
        options={{ title: 'AI movies' }}
      />
    </Stack.Navigator>
  );
}
