import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Platform
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';

const { height, width } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';

const MovieScreen = () => {
  const { params: item } = useRoute();

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
            <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
          </TouchableOpacity>
          <TouchableOpacity>
            <HeartIcon size='35' color='white' />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
