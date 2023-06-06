import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <Button
          title='Sign In'
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Sign In')}
        />
        <Button
          title='Sign Up'
          type='outline'
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Sign Up')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttons: {
    flex: 1
  },

  button: {
    marginTop: 10
  }
});

export default WelcomeScreen;
