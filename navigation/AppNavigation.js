import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';

import { useAuthentication } from '../utils/hooks/useAuthentication';
import { setUser } from '../redux/slices/userSlice';
import { auth } from '../config/firebase';

import HomeScreen from '../screens/HomeScreen';
import MyMoviesScreen from '../screens/MyMoviesScreen';
import RandomScreen from '../screens/RandomScreen';
import MovieScreen from '../screens/MovieScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  // onAuthStateChanged(auth, u => {
  //   dispatch(setUser(u));
  // });
  // if (user) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
      <Stack.Screen name='Movie' options={{ headerShown: false }} component={MovieScreen} />
      <Stack.Screen name='Person' options={{ headerShown: false }} component={PersonScreen} />
      <Stack.Screen name='Search' options={{ headerShown: false }} component={SearchScreen} />
      {/* <Stack.Screen
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
			/> */}
    </Stack.Navigator>
  );
  // } else {
  //   return (
  //     <Stack.Navigator
  //       screenOptions={{ headerShown: false }}
  //       initialRouteName='Welcome'
  //     >
  //       <Stack.Screen name='SignIn' component={SignInScreen} />
  //       <Stack.Screen name='SignUp' component={SignUpScreen} />
  //       <Stack.Screen name='Welcome' component={WelcomeScreen} />
  //     </Stack.Navigator>
  //   );
  // }
};

export default AppNavigation;
