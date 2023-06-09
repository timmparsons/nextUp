import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Platform,
  Image
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';

const { height, width } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';

const MovieScreen = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4]);
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const movieName = 'Ant Man and the Wasp';

  useEffect(() => {}, [item]);

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className='flex-1 bg-neutral-900 p-5'
    >
      <View className='w-full'>
        <SafeAreaView
          className={
            'absolute z-20 w-full flex-row justify-between items-center px-4' +
            topMargin
          }
        >
          <TouchableOpacity
            style={{ backgroundColor: '#eab308' }}
            className='rounded-xl p-1'
          >
            <ChevronLeftIcon
              size='28'
              strokeWidth={2.5}
              color='white'
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            {/* TODO: Dispatch action to add favorite to firebase */}
            <HeartIcon
              size='35'
              color='white'
              color={isFavorite ? 'red' : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={{
              uri:
                'https://www.themoviedb.org/t/p/w1280/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg'
            }}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className='absolute bottom-0'
          />
        </View>
      </View>

      <View style={{ marginTop: -(height * 0.09) }} className='space-y-3'>
        <Text className='text-white text-center text-3xl font-bold tracking-wider'>
          {movieName}
        </Text>
        <Text className='text-neutral-400 font-semibold text-base text-center'>
          Released * 202 * 170 min
        </Text>
        <View className='flex-row justify-center mx-4 space-x-2'>
          <Text className='text-neutral-400 font-semibold text-base text-center'>
            Action *
          </Text>
          <Text className='text-neutral-400 font-semibold text-base text-center'>
            Thrill *
          </Text>
          <Text className='text-neutral-400 font-semibold text-base text-center'>
            Comedy *
          </Text>
        </View>
        <Text className='text-neutral-400 mx-4 tracking-wide'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </View>

      {/*  Cast */}
      <Cast cast={cast} navigation={navigation} />

      {/* Similar Movies */}
      <MovieList
        title='Similar Movies'
        hideSeeAll={true}
        data={similarMovies}
      />
    </ScrollView>
  );
};

export default MovieScreen;
