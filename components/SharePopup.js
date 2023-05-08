import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native'
import Modal from 'react-native-modal';
import { showSharePopup } from '../redux/slices/movieSlice';

const SharePopup = ({
	movie,
	setSelected 
}) => {
	const isVisible = useSelector(state => state.movie.showSharePopup)
	const dispatch = useDispatch();
	return (
		<SafeAreaView>
			<Modal
				isVisible={isVisible}
				style={styles.bottomModal}>
				<View style={styles.modalContent}>
					<Text></Text>
					<Button 
						title='close'
						onPress={() => {
							dispatch(showSharePopup(false))
							setSelected(null)	
						}}
					/>
				</View>
			</Modal>
		</SafeAreaView>
);
}

const styles = StyleSheet.create({
	modalContent: {
		backgroundColor: 'white',
		height: 500,
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
})

export default SharePopup
