import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { MOVIE_LIST } from '../constants/index';
import SharePopup from './SharePopup';
import MovieItem from './MovieItem';

const MovieList = () => {
	const [ selected, setSelected ] = useState(null)
	const [ showModal, setShowModal ] = useState(false)
	
	return (
		<View>
			<FlatList
				data={MOVIE_LIST}
				renderItem={({item}) => <MovieItem movie={item} setSelected={setSelected} selected={selected} setShowModal={setShowModal}/>}
				keyExtractor={item => item.id}
				numColumns={3}
				style={styles.list}
			/>
			{ selected && showModal &&
				<SharePopup
					showModal={showModal}
					setShowModal={setShowModal}
					setSelected={setSelected} />
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