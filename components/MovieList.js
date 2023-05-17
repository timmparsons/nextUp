import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { MOVIE_LIST } from '../constants/index';
import SharePopup from './SharePopup';
import MovieItem from './MovieItem';
import {
  getMovies,
  selectAllPopularMovies,
  selectShowPopup,
  showMovieLoadingState
} from '../redux/slices/movieSlice';

const MovieList = () => {
  const showPopup = useSelector(selectShowPopup);
  const popularMovies = useSelector(selectAllPopularMovies);
  const showLoadingState = useSelector(showMovieLoadingState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  console.log('xxx', popularMovies);

  return showLoadingState === true ? (
    <Text>Loading...</Text>
  ) : (
    <View>
      <FlatList
        data={popularMovies}
        renderItem={({ item }) => <MovieItem movie={item} />}
        keyExtractor={item => item.id}
        numColumns={3}
        style={styles.list}
      />
      {showPopup && <SharePopup />}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default MovieList;
