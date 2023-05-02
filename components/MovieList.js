import React from 'react'
import { View, Text, Image } from 'react-native'
import { MOVIE_LIST } from '../constants/index';

const MovieList = () => {
	return (
		<View>
		{MOVIE_LIST.map(movie => {
			console.log(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)
			return (
				<Image
					style={{ height: 250, width: 150, resizeMode: 'stretch' }}
					key={movie.id}
					source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} />
			)})
		}
		</View>
	)
}

export default MovieList;
