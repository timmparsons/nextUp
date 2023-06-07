import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllPopularMovies,
  selectTrendingList
} from '../redux/slices/movieSlice';
import * as Icon from 'react-native-feather';
import BackButton from '../components/BackButton';

import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native';

const MovieScreen = ({ route }) => {
  const [loading, setLoading] = useState(false);

  const popularMovies = useSelector(selectTrendingList);
  const movie = popularMovies.results.find(
    movie => movie.id === route.params.id
  );

  const addMovie = async () => {
    setLoading(true);
    let doc = await addDoc(tripsRef, {
      place,
      country,
      userId: user.uid
    });
    setLoading(false);
    if (doc && doc.id) {
      Icon.Navigation.goBack();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton />
        <Text style={styles.heading}>{movie.original_title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <View>
          <Image
            style={styles.image}
            key={movie.id}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={addMovie}>
        <Icon.Share height={25} width={25} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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
    aspectRatio: 1 / 2
  }
});

export default MovieScreen;
