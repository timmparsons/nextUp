import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import MyMoviesScreen from '../screens/MyMoviesScreen';
import RandomScreen from '../screens/RandomScreen';
import MovieScreen from '../screens/MovieScreen';

const Stack = createNativeStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
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
      <Stack.Screen
        name='Movie Screen'
        component={MovieScreen}
        options={{ title: 'Movie Screen' }}
      />
    </Stack.Navigator>
  );
}
