import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';
import { useNavigation } from '@react-navigation/native';
import { getTrendingMovies, getTopRatedMovies, getUpcomingMovies } from '../api/movidedb';
import { selectTrendingMovies, selectUpcomingMovies, selectTopRatedMovies } from '../redux/slices/movieSlice';

const ios = Platform.OS === 'ios';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const trendingMovies = useSelector(selectTrendingMovies);
  const upComingMovies = useSelector(selectUpcomingMovies);
  const topRatedMovies = useSelector(selectTopRatedMovies);

  useEffect(() => {
    getTrendingMovies(dispatch);
    getUpcomingMovies(dispatch);
    getTopRatedMovies(dispatch);
  }, []);

  return (
    <View className='flex-1 bg-neutral-800'>
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <StatusBar style='light' />
        <View className='flex-row justify-between items-center mx-4'>
          <Bars3CenterLeftIcon size='30' strokeWidth={2} color='white' />
          <Text className='text-white text-3xl font-bold'>
            <Text style={{ color: '#eab308' }}>N</Text>
            <Text>extUp</Text>
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size='30' strokeWidth={2} color='white' />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
        {/* Trending Movies Carousel */}
        {trendingMovies && <TrendingMovies data={trendingMovies} />}

        {/* Upcoming Movies Carousel */}
        <MovieList title='Upcoming' data={upComingMovies} />

        {/* TopRated Movies Carousel */}
        <MovieList title='Top Rated' data={topRatedMovies} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
