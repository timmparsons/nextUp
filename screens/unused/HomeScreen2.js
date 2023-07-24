import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MovieItem from '../../components/MovieItem';
import { selectTrendingList, showMovieLoadingState, selectShowPopup } from '../../redux/slices/movieSlice';
import SharePopup from '../../components/SharePopup';
import { useAuthentication } from '../../utils/hooks/useAuthentication';
import { getAuth, signOut } from 'firebase/auth';
import { apiCalls } from '../../api/index';
import { ENDPOINTS } from '../../constants';

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState('Trending Movies');
  const showPopup = useSelector(selectShowPopup);
  const showLoadingState = useSelector(showMovieLoadingState);

  const { user } = useAuthentication();
  const auth = getAuth();

  const trendingList = useSelector(selectTrendingList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendingMovies());
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.logo}>nextUp</Text>
        <TouchableOpacity>
          <Text style={styles.logoutButton}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.moviesSection}>
        <View style={styles.trendingMovieContainer}>
          {/* Trending List */}
          <ScrollView horizontal style={styles.movieListHeader}>
            {apiCalls.map((topic, index) => {
              const isActive = topic.id == activeCategory;

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setActiveCategory(topic.id);
                    console.log(topic.id);
                    dispatch(topic.id === ENDPOINTS.trendingTvShows ? getTrendingTvShows() : getTrendingMovies());
                  }}
                  style={styles.categoryContainer}
                >
                  <Text style={isActive ? styles.selectedCategory : styles.unselectedCategory}>{topic.id}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View>
          {showLoadingState === true ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={trendingList?.results}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <MovieItem movie={item} />}
              keyExtractor={item => item.id}
              numColumns={3}
              style={styles.list}
            />
          )}
        </View>
      </View>
      {showPopup && <SharePopup />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 25
  },
  logoutButton: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10
  },
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50
  },
  bannerImage: {
    height: 300,
    width: 300,
    borderRadius: 20
  },
  moviesSection: {
    padding: 10
  },
  moviesSectionHeader: {
    fontWeight: 'bold',
    fontSize: 22
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  categoryContainer: {
    marginRight: 5,
    padding: 2
  },
  selectedCategory: {
    fontWeight: 'bold',
    borderWidth: 0.5,
    padding: 2
  }
});
