import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setSelectedMovie } from '../redux/slices/movieSlice';

const MovieItem = ({ movie }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedMovieId = useSelector(state => state.movie.selectedMovie);
  //TODO: Fix background color on select

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onLongPress={() => {
          dispatch(setSelectedMovie({ movie, showSharePopup: true }));
        }}
        // style={selectedMovieId === movie.id && styles.imageSelected}
        style={styles.movieImage}
        onPress={() => {
          navigation.navigate({
            name: 'MovieScreen',
            params: { id: movie.id },
            merge: true
          });
        }}
      >
        <Image
          style={styles.image}
          key={movie.id}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    borderColor: 'red'
  },
  image: {
    height: 250,
    aspectRatio: 1 / 2,
    flexDirection: 'column',
    margin: 9,
    borderRadius: 20
  },
  movieImage: {
    padding: 2
  },
  imageSelected: {
    backgroundColor: 'red'
  }
});

export default MovieItem;
