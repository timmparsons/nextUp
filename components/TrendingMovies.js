import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { height, width } = Dimensions.get('window');

const TrendingMovies = ({ data }) => {
  return (
    <View className='mb-8'>
      <Text className='text-white text-xl mx-4 mb5'>Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
};

const MovieCard = ({ data }) => {
  return (
    <TouchableWithoutFeedback>
      <Image
        source={require('../assets/office.jpg')}
        style={{
          width: width * 0.6,
          height: height * 0.4
        }}
        className='rounded-3xl'
      />
    </TouchableWithoutFeedback>
  );
};

export default TrendingMovies;
