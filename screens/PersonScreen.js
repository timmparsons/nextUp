import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Platform,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { HeartIcon } from 'react-native-heroicons/solid';
import { selectPerson } from '../redux/slices/movieSlice';
import { fetchPerson, image500 } from '../api/movidedb';

const { height, width } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const verticalMargin = ios ? '' : 'my-9';

const PersonScreen = () => {
  const navigation = useNavigation();
	const { params: item } = useRoute();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const person = useSelector(selectPerson);

	useEffect(() => {
		setLoading(true);
		getPersonDetails(item.id)
	}, [item]);

	const getPersonDetails = async (id) => {
		await fetchPerson(id, dispatch)
		setLoading(false)
	}

  return (
    <ScrollView
      className='flex-1 bg-neutral-900'
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* back button */}
      <SafeAreaView
        className={
          'flex-row justify-between items-center mx-4 z-10 ' + verticalMargin
        }
      >
        <TouchableOpacity
          style={{ backgroundColor: '#eab308' }}
          className='rounded-xl p-1'
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
        </TouchableOpacity>
      </SafeAreaView>

      <View>
        <View
          className='flex-row justify-center'
          style={{
            shadowColor: 'gray',
            shadowRadius: 40,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1
          }}
        >
          <View className='items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2'>
            <Image
              source={{
                uri: image500(person.profile_path) }}
              style={{ height: height * 0.43, width: width * 0.74 }}
            />
          </View>
        </View>

        <View className='mt-6'>
          <Text className='text-3xl text-white font-bold text-center'>
            {person?.name}
          </Text>
          <Text className='text-neutral-500 text-base text-center'>
            {person?.place_of_birth}
          </Text>
        </View>

        <View className='mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full '>
          <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
            <Text className='text-white font-semibold '>Gender</Text>
            <Text className='text-neutral-300 text-sm'>{person?.gender === 1 ? 'Female' : 'Male'}</Text>
          </View>
          <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
            <Text className='text-white font-semibold'>Birthday</Text>
            <Text className='text-neutral-300 text-sm'>{person?.birthday}</Text>
          </View>
          <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
            <Text className='text-white font-semibold'>Known for</Text>
            <Text className='text-neutral-300 text-sm'>{person?.known_for_department}</Text>
          </View>
          <View className='px-2 items-center'>
            <Text className='text-white font-semibold'>Popularity</Text>
            <Text className='text-neutral-300 text-sm'>{person?.popularity?.toFixed(2)} %</Text>
          </View>
        </View>
        <View className='my-6 mx-4 space-y-2'>
          <Text className='text-white text-lg'>Biography</Text>
          <Text className='text-neutral-400 tracking-wide'>{person?.biography || 'N/A'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PersonScreen;

// 				<ScrollView
//   className='flex-1 bg-neutral-900'
//   contentContainerStyle={{ paddingBottom: 20 }}
// >
//   <SafeAreaView
//     className={
//       'absolute z-20 w-full flex-row justify-between items-center px-4' +
//       verticalMargin
//     }
//   >
//     <TouchableOpacity
//       style={{ backgroundColor: '#eab308' }}
//       className='rounded-xl p-1'
//       onPress={() => navigation.goBack()}
//     >
//       <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
//     </TouchableOpacity>
//   </SafeAreaView>

//   <View>
//     <View className='flex-row justify-center'>
//       <View className='items-center py-50 rounded-full overflow-hidden h-72 w-72 border border-neutral-500'>
//         <Image
//           source={{
//             uri:
//           }}
//           style={{ height: height * 0.43, width: width * 0.74 }}
// 					/>
// 					</View>
// 					</View>
// 					</View>
// 					</ScrollView>
// 					);

//
