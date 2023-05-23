import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import AppNavigation from './navigation/AppNavigation';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
          {/* <AppNavigation /> */}
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
