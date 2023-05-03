import React from 'react'
import { View, Text, Button, SafeAreaView, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const MovieScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView className='bg-white'>
		<View className='flex-row items-center space-x-2 px-4 pb-2 py-2'>
				<Text>Movie Details</Text>
				<Button title='Go Back' onPress={() => navigation.goBack()} />
			</View>
		</SafeAreaView>
	)
}

export default MovieScreen;
