import React, { useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MovieItem from '../components/MovieItem';
import {
  selectAllPopularMovies,
  getPopularMovies,
  showMovieLoadingState,
  selectShowPopup
} from '../redux/slices/movieSlice';
import SharePopup from '../components/SharePopup';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { getAuth, signOut } from 'firebase/auth';

export default function HomeScreen({ navigation }) {
  const showPopup = useSelector(selectShowPopup);
  const showLoadingState = useSelector(showMovieLoadingState);

  const { user } = useAuthentication();
  const auth = getAuth();

  const popularMovies = useSelector(selectAllPopularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.logo}>nextUp</Text>
        <TouchableOpacity>
          <Text style={styles.logoutButton}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/office.jpg')}
          style={styles.bannerImage}
        />
      </View>
      <View style={styles.moviesSection}>
        <View style={styles.container}>
          <Text style={styles.moviesSectionHeader}>Popular Movies</Text>
          <TouchableOpacity>
            <Text>Share Movie</Text>
          </TouchableOpacity>
        </View>
        <View>
          {showLoadingState === true ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={popularMovies}
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
  }
});
