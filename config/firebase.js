// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import Constants from 'expo-constants';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfV50R55fkl1bL5jGX1lGKibqPAtM81JE',
  authDomain: 'nextup-ef1d0.firebaseapp.com',
  projectId: 'nextup-ef1d0',
  storageBucket: 'nextup-ef1d0.appspot.com',
  messagingSenderId: '1081766222104',
  appId: '1:1081766222104:web:a85d8fa58d72086400266d',
  measurementId: 'G-M6DGJQ186C'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const analytics = getAnalytics(app);

export const auth = getAuth(app);
