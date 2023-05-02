import React from 'react'
import { View, Text } from 'react-native'
import { MOVIE_LIST } from '../constants/index';

const MovieList = () => {
	return (
		<View>
		{MOVIE_LIST.map(movie => ( 
			<Text>{movie.original_title}</Text>
		))}
		</View>
	)
}

export default MovieList;
