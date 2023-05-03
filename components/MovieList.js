import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { MOVIE_LIST } from '../constants/index';


const onPress = (movie) => ( 
	console.log('CLICK', movie.id)
)

const Item = ({movie}) => {
	return (
  <View className='m-2'>
		<TouchableOpacity
			onPress={() => onPress(movie)}
		>
    <Image
			style={{ height: 250, width: 150, resizeMode: 'stretch' }}
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