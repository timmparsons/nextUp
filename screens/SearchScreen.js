import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const SearchScreen = () => {
  const [results, setResults] = useState([1, 2, 3, 4]);
  const navigation = useNavigation();
  const movieName = 'Star Wars: Return of the Sith and more';

  return (
    <SafeAreaView className='bg-neutral-800 flex-1'>
      <View className='mx-4  mb-3  flex-row justify-between items-center border border-neutral-500 rounded-full'>
        <TextInput
          placeholder='Search Movie'
          placeholderTextColor={'lightgray'}
          className='pb-2 pl-6 flex-1 text-base font-semibold text-white tracking-wider'
        />
        <TouchableOpacity onPress={() => navigation.navigate('Home')} className='rounded-full p-3 m-1 bg-neutral-500'>
          <XMarkIcon size={25} color='white' />
        </TouchableOpacity>
      </View>

      {results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className='space-y-3'
        >
          <Text className='text-white font-semibold ml-1'>Results ({results.length})</Text>
          <View className='flex-row justify-between flex-wrap'>
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', item)}>
                  <View className='space-y-2 mb-4'>
                    <Image
                      className='rounded-3xl'
                      source={{
                        uri: 'https://www.themoviedb.org/t/p/w1280/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg'
                      }}
                      style={{ width: width * 0.44, height: height * 0.3 }}
                    />
                    <Text className='text-neutral-300 ml-1'>
                      {movieName.length > 22 ? movieName.slice(0, 22) + '...' : movieName}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <Text className='text-neutral-300 text-xl pl-4 mt-10'>Nothing to Show </Text>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
