import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { image185 } from '../api/movidedb';

const { height, width } = Dimensions.get('window');

const MovieList = ({ title, data, hideSeeAll }) => {
  const navigation = useNavigation();
  return (
		<View className='mb-8 space-y-4'>
      <View className='mx-4 flex-row justify-between items-center'>
        <Text className='text-white text-xl'>{title}</Text>
        {!hideSeeAll && (
					<TouchableOpacity>
            <Text style={{ color: '#eab308' }} className='text-lg'>
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* Movie Row */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
        {data.map((item, index) => {
					return (
            <TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', item)}>
              <View className='space-y-1 mr-4'>
                <Image
                  source={{
                    uri: image185(item.poster_path)
                  }}
                  className='rounded-3xl'
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />
                <Text className='text-neutral-300 ml-1'>{item.original_title.length > 14 ? item.original_title.slice(0, 14) + '...' : item.or}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;
