import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import SignupPage from './pages/signupPage';
import ForgetPassword from './pages/forgotPassword';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={LoginPage} />
				<Stack.Screen name="SignUp" component={SignupPage} />
				<Stack.Screen name="Home" component={HomePage} />
				<Stack.Screen name="ForgetPassword" component={ForgetPassword} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
