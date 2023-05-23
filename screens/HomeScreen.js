import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import * as Icon from 'react-native-feather';
import Categories from '../components/Categories';
import MovieList from '../components/MovieList';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';

export default function HomeScreen({ navigation }) {
  const { user } = useAuthentication();
  const auth = getAuth();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.logo}>nextUp</Text>
        <TouchableOpacity>
          <Text style={styles.logoutButton}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/office.jpg')}
          style={styles.bannerImage}
        />
      </View>
      <View style={styles.moviesSection}>
        <View style={styles.container}>
          <Text style={styles.moviesSectionHeader}>Recent Movies</Text>
          <TouchableOpacity>
            <Text>Share Movie</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 25
  },
  logoutButton: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10
  },
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50
  },
  bannerImage: {
    height: 300,
    width: 300
  },
  moviesSection: {
    padding: 10
  },
  moviesSectionHeader: {
    fontWeight: 'bold',
    fontSize: 22
  }
});

// <SafeAreaView className='bg-white'>
// <View className='flex-row items-center space-x-2 px-4 pb-2 py-2'>
// 	<View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300'>
// 		<Icon.Search height='25' width='25' stroke='gray' />
// 		<TextInput placeholder='Find a movie'/>
// 	</View>
// </View>
// 	{/* <StyledText className='font-bold text-red-500'>Home Screen</StyledText> */}
// 	{/* <Button
// 		title='Go To My Movies'
// 		onPress={() => navigation.navigate('My Movies')} /> */}
// 	<View>
// 		<Categories />
// 	</View>
// 	<View>
// 		<MovieList />
// 	</View>
// 	<Button title="Sign Out" style={styles.button} onPress={() => {
// 		signOut(auth)
// 		navigation.navigate('Welcome')}
// 		}
// 		/>
// </SafeAreaView>
