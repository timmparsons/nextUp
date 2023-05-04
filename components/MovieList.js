import React, { useState } from 'react'
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { MOVIE_LIST } from '../constants/index';
import { useNavigation } from '@react-navigation/native';
import SharePopup from './SharePopup';

const Item = ({movie, setSelected, selected}) => {
	const navigation = useNavigation();
	
	return (
  <View style={styles.container}>
		<TouchableOpacity
			onLongPress={() => {
				console.log('LONG PRESS')
				setSelected(movie.id)
				// setSelected(null)
			}
			}
			style={selected === movie.id && styles.imageSelected}
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
	const [ selected, setSelected ] = useState(null)

	return (
		<View>
			<FlatList
				data={MOVIE_LIST}
				renderItem={({item}) => <Item movie={item} setSelected={setSelected} selected={selected} />}
				keyExtractor={item => item.id}
				numColumns={3}
				style={styles.list}
			/>
			{ selected && <SharePopup />}
		</View>
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
	},
	imageSelected: {
		backgroundColor: 'red'
	}
})

export default MovieList;