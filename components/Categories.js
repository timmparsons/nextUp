import React, { useState} from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { MOVIE_LIST, GENRES } from '../constants/index';

const Categories = () => {
	const [activeGenre, setActiveGenre] = useState(null);

	const Item = ({title}) => (
		<View>
			<Text>{title}</Text>
		</View>
	);

	return (
		<View className='mt-4'>
		<FlatList
			data={GENRES}
			renderItem={({item}) => <Item title={item.title} />}
			keyExtractor={item => item.id}
		/>
			{/* <ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='overflow-visible'
				contentContainerStyle={{
					paddingHorizontal: 15
				}}
			>
			{ GENRES.map((genre, index) => {
				const isActive = genre.id == activeGenre;
				const activeButton = isActive ? 'bg-gray-600' : 'bg-gray-200';
				const activeText = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';

				return (
					<View key={index} className='flex justify-content items-center mr-10'>
						<TouchableOpacity
							className='p-1 rounded-full shadow bg-gray-200'
							onPress={() => setActiveGenre(genre.id)}>
								<Text className={'text-sm' +activeText}>{genre.name}</Text>
							</TouchableOpacity>
					</View>
				)
			})}
			</ScrollView> */}
		</View>
	)
}

export default Categories;
