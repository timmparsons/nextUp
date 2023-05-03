import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { MOVIE_LIST } from '../constants/index';
import { useNavigation } from '@react-navigation/native';

const Item = ({movie}) => {
  const navigation = useNavigation();

	console.log('qqq', navigation)
	return (
  <View className='m-2'>
		<TouchableOpacity
			onPress={() => navigation.navigate('Movie Screen')}
		>
    <Image
			style={{ height: 250, width: 150}}
			key={movie.id}
			source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} 
			/>
		</TouchableOpacity>
  </View>
	)};

const MovieList = () => {
	return (
		<FlatList
			data={MOVIE_LIST}
			renderItem={({item}) => <Item movie={item} />}
			keyExtractor={item => item.id}
			numColumns={3}
		/>
	)
}

export default MovieList;