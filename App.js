import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthentication } from './utils/hooks/useAuthentication';
import { store } from './store/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'react-native-elements';
import UserStack from './navigation/userStack';
import AuthStack from './navigation/authStack';

export default function App() {
	const { user } = useAuthentication();

  return (
		<ThemeProvider>
			<Provider store={store}>
				<NavigationContainer>
					{ user ? <UserStack /> : <AuthStack />}
				</NavigationContainer>
			</Provider>
		</ThemeProvider>
  );
}

const styles = StyleSheet.create({});
