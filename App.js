import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import LoginPage from './pages/loginPage/loginPage.component';
import HomePage from './pages/homePage';
import SignupPage from './pages/signupPage/signupPage.component';
import ForgetPassword from './pages/forgotPassword';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider} from './context/authContext';

const Stack = createStackNavigator();

const App = () => {
	return (
		<SafeAreaProvider>
			<AuthProvider>
				<NavigationContainer>
					<StatusBar backgroundColor="#111313" barStyle="light-content" />
					<Stack.Navigator
						initialRouteName="Login"
						screenOptions={{
							headerShown: false,
						}}
					>
						<Stack.Screen name="Login" component={LoginPage} />
						<Stack.Screen name="SignUp" component={SignupPage} />
						<Stack.Screen name="Home" component={HomePage} />
						<Stack.Screen name="ForgetPassword" component={ForgetPassword} />
					</Stack.Navigator>
				</NavigationContainer>
			</AuthProvider>
		</SafeAreaProvider>
	);
};

export default App;
