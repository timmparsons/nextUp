import React from 'react'
import { View, Text, Button, SafeAreaView, TextInput } from 'react-native'
import * as Icon from 'react-native-feather';
import Categories from '../components/Categories';
import MovieList from '../components/MovieList';

const HomeScreen = () => {
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
			<Categories />
			<MovieList />
		</SafeAreaView>
	)
}

export default HomeScreen;
