import React, { useState } from 'react';
import { View, Text, Dimensions, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const SearchScreen = () => {
  const [results, setResults] = useState([1, 2, 3, 4]);
  const navigation = useNavigation();

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className='space-y-3'
      >
        <Text className='text-white font-semibold ml-1'>Results ({results.length})</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
