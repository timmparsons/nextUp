import React, { useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { MOVIE_LIST } from '../constants/index';
import { useNavigation } from '@react-navigation/native';

const Item = ({movie}) => {
	const [ selected, setSelected ] = useState(null)
  const navigation = useNavigation();

	return (
  <View style={styles.container}>
		<TouchableOpacity
			onLongPress={() => setSelected(movie.id)}
			onPress={() => navigation.navigate({
				name: 'Movie Screen',
				params: { id: movie.id },
				merge: true
				})}
		>
    <Image
			style={styles.image}
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
			style={styles.list}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		borderColor: 'red'
	},
	list: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	image: {
		height: 250,
		aspectRatio: 1/2,
		flexDirection: 'column',
		margin: 9
	}
})

export default MovieList;