import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MyMoviesScreen from './screens/MyMoviesScreen';
import RandomScreen from './screens/RandomScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
			<Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      	<Stack.Screen name='Home' component={HomeScreen} />
      	<Stack.Screen name='My Movies' component={MyMoviesScreen} options={{ title: 'tims movies'}}/>
      	<Stack.Screen name='Random picks' component={RandomScreen} options={{ title: 'AI movies'}}/>
			</Stack.Navigator>
		</NavigationContainer>
  );
}

const styles = StyleSheet.create({});
