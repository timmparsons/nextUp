import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/core';

const { height, width } = Dimensions.get('window');

const TrendingMovies = ({ data }) => {
  const navigation = useNavigation();

  const handleClick = item => {
    navigation.navigate('Movie', item);
  };

  return (
    <View className='mb-8'>
      <Text className='text-white text-xl mx-4 mb5'>Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={() => handleClick(item)} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
};

const MovieCard = ({ data, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
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
