import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SharePopup = () => {
	console.log('popping up')
	return (
		<View style={styles.container}>
			<Text>Popup</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 150
	}
})

export default SharePopup
