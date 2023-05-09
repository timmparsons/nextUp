import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { View, FlatList, StyleSheet } from 'react-native'
import { MOVIE_LIST } from '../constants/index';
import SharePopup from './SharePopup';
import MovieItem from './MovieItem';

const MovieList = () => {
	const showPopup = useSelector((state) => state.movie.showSharePopup)

	return (
		<View>
			<FlatList
				data={MOVIE_LIST}
				renderItem={({item}) => <MovieItem movie={item} />}
				keyExtractor={item => item.id}
				numColumns={3}
				style={styles.list}
			/>
			{ showPopup &&
				<SharePopup />
			}
		</View>
	)
}

const styles = StyleSheet.create({
	list: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
})

export default MovieList;