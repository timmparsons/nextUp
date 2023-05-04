import React from 'react'
import * as Icon from 'react-native-feather';

import { View, Text, Button, SafeAreaView, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { MOVIE_LIST } from '../constants/index';

const MovieScreen = ({ route }) => {
	const movie = MOVIE_LIST.find(movie => movie.id === route.params.id)
	
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={styles.heading}>{movie.original_title}</Text>
				<Text style={styles.overview}>{movie.overview}</Text>
				<View>
				<Image
					style={styles.image}
					key={movie.id}
					source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} 
					/>
				</View>
			</View>
		<Icon.Share height={25} width={25} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		display: 'flex',
		justifyContent: 'center'
	},
	heading: {
		fontSize: 22,
		fontWeight: 'bold',
		paddingBottom: 5
	},
	overview: {
		fontSize: 16
	},
	image: {
		height: 500, 
		aspectRatio: 1/2,
	}
})

export default MovieScreen;
