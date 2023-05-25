import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ChevronLeftIcon size='30' />
    </TouchableOpacity>
  );
};

export default BackButton;
