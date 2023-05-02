import React, { useState} from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { MOVIE_LIST, GENRES } from '../constants/index';

const Categories = () => {
	const [activeGenre, setActiveGenre] = useState(null);

	return (
		<View className='mx-4 my-4'>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='overflow-visible'
				contentContainerStyle={{
					paddingHorizontal: 15
				}}
			>
			{ GENRES.map((genre, index) => {
				const isActive = genre.id == activeGenre;
				const activeText = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';

				return (
					<View key={index} className='mr-5'>
						<TouchableOpacity
							className='bg-gray-200 p-3 rounded'
							onPress={() => setActiveGenre(genre.id)}>
								<Text className={'text-lg' +activeText}>{genre.name}</Text>
							</TouchableOpacity>
					</View>
				)
			})}
			</ScrollView>
		</View>
	)
}

export default Categories;
