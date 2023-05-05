import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native'
import Modal from 'react-native-modal';

const SharePopup = ({
	movie,
	showModal,
	setShowModal,
	setSelected 
}) => {
	return (
		<SafeAreaView>
			<Modal
				isVisible={showModal}
				style={styles.bottomModal}>
				<View style={styles.modalContent}>
					<Text></Text>
					<Button 
						title='close'
						onPress={() => {
							setShowModal(false)
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
