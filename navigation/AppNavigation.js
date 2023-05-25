import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import HomeScreen from '../screens/HomeScreen';
import MyMoviesScreen from '../screens/MyMoviesScreen';
import RandomScreen from '../screens/RandomScreen';
import MovieScreen from '../screens/MovieScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignOutScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const { user } = useAuthentication();

  // if (user) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen
        headerShown={true}
        name='MovieScreen'
        component={MovieScreen}
        options={{ title: 'Movie Screen' }}
      />
      <Stack.Screen
        name='MyMovies'
        component={MyMoviesScreen}
        options={{ title: 'tims movies' }}
      />
      <Stack.Screen
        name='RandomScreen'
        component={RandomScreen}
        options={{ title: 'AI movies' }}
      />
    </Stack.Navigator>
  );
  // } else {
  //   return (
  //     <Stack.Navigator screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name='Welcome' component={WelcomeScreen} />
  //       <Stack.Screen name='SignIn' component={SignInScreen} />
  //       <Stack.Screen name='SignUp' component={SignOutScreen} />
  //     </Stack.Navigator>
  //   );
  // }
};

export default AppNavigation;
