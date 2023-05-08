import React from 'react'
import { useDispatch } from 'react-redux';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { showSharePopup } from '../redux/slices/movieSlice';

const MovieItem = ({movie, setSelected, selected}) => {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	return (
  <View style={styles.container}>
		<TouchableOpacity
			onLongPress={() => {
				setSelected((currentSelected) => movie.id === currentSelected ? null : movie.id)
				dispatch(showSharePopup(true))
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

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'space-between',
			borderColor: 'red'
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

export default MovieItem
