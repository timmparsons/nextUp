import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView, SafeAreaView, Dimensions, Platform, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import MovieList from '../components/MovieList';
import { fetchMovieDetails, fetchMovieCast, image185, image500 } from '../api/movidedb';
import { selectMovieDetails, selectMovieCast } from '../redux/slices/movieSlice';

const { height, width } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? '' : 'mt-3';

const MovieScreen = () => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [loading, setLoading] = useState(false);
	const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4]);
	const { params: item } = useRoute();
	
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const movieDetails = useSelector(selectMovieDetails);
	const movieCast = useSelector(selectMovieCast);

	useEffect(() => {
		setLoading(true);
		getMovieDetails(item?.id);
		getMovieCast(item?.id);
	}, [item]);

	const getMovieDetails = async id => {
		await fetchMovieDetails(id, dispatch);
		setLoading(false);
	};

	const getMovieCast = async id => {
		await fetchMovieCast(id, dispatch);
		setLoading(false);
	};

	return (
		<ScrollView contentContainerStyle={{ paddingBottom: 20 }} className='flex-1 bg-neutral-900 p-5'>
			<View className='w-full'>
				<SafeAreaView className={'absolute z-20 w-full flex-row justify-between items-center px-4' + topMargin}>
					<TouchableOpacity style={{ backgroundColor: '#eab308' }} className='rounded-xl p-1'>
						<ChevronLeftIcon size='28' strokeWidth={2.5} color='white' onPress={() => navigation.goBack()} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
						{/* TODO: Dispatch action to add favorite to firebase */}
						<HeartIcon size='35' color='white' color={isFavorite ? 'red' : 'white'} />
					</TouchableOpacity>
				</SafeAreaView>
				<View>
					<Image
						source={{
							uri: image500(movieDetails.poster_path)
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
				<Text className='text-white text-center text-3xl font-bold tracking-wider'>{movieDetails.original_title}</Text>
				{movieDetails?.id &&
					<Text className='text-neutral-400 font-semibold text-base text-center'>
						{movieDetails?.status} * {movieDetails?.release_date.split('-')[0]} * {movieDetails.runtime} minutes
					</Text>
				}
				<View className='flex-row justify-center mx-4 space-x-2'>
					{movieDetails?.genres?.map((genre, index) => {
						let showDot = index += 1 != movieDetails.genres.length;
						return (
							<Text key={index} className='text-neutral-400 font-semibold text-base text-center'>
								{genre.name} {showDot ? '*' : null}
							</Text>
						)
					})}
				</View>
				<Text className='text-neutral-400 mx-4 tracking-wide'>{movieDetails?.overview}</Text>
			</View>

			{/*  Cast */}
			<Cast cast={movieCast} navigation={navigation} />

			{/* Similar Movies */}
			<MovieList title='Similar Movies' hideSeeAll={true} data={similarMovies} />
		</ScrollView>
	);
};

export default MovieScreen;
