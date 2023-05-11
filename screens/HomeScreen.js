import React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import * as Icon from 'react-native-feather';
import Categories from '../components/Categories';
import MovieList from '../components/MovieList';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from "firebase/auth";

export default function HomeScreen({navigation}) {
  const { user } = useAuthentication();
	const auth = getAuth();
	
  return (
    	<SafeAreaView className='bg-white'>
		<View className='flex-row items-center space-x-2 px-4 pb-2 py-2'>
			<View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300'>
				<Icon.Search height='25' width='25' stroke='gray' />
				<TextInput placeholder='Find a movie'/>
			</View>
		</View>
			{/* <StyledText className='font-bold text-red-500'>Home Screen</StyledText> */}
			{/* <Button
				title='Go To My Movies'
				onPress={() => navigation.navigate('My Movies')} /> */}
			<View>
				<Categories />
			</View>
			<View>
				<MovieList />
			</View>
			<Button title="Sign Out" style={styles.button} onPress={() => {
				signOut(auth) 
				navigation.navigate('Welcome')} 
				}
				/>
		</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10
  }
});