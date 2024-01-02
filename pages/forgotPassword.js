import React, {useState} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	TouchableOpacity,
	Linking,
} from 'react-native';
import styled from 'styled-components/native';
import {userLogin} from '../requests/user';

const Container = styled.View`
	flex: 1;
	background-color: #fff;
	padding-horizontal: 30px;
	padding-top: 50px;
`;

const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 30px;
`;

const Input = styled.TextInput`
	border-width: 1px;
	border-color: gray;
	border-radius: 5px;
	padding-horizontal: 10px;
	padding-vertical: 5px;
	margin-bottom: 20px;
`;

const ForgotPassword = styled.TouchableOpacity`
	margin-top: 10px;
	margin-bottom: 20px;
`;

const ForgotPasswordText = styled.Text`
	color: blue;
	font-size: 16px;
`;

const Terms = styled.Text`
	font-size: 14px;
	color: gray;
`;

const Link = styled.Text`
	color: blue;
	font-weight: bold;
`;

const SendButton = styled.TouchableOpacity`
	margin-top: 20px;
	background-color: purple;
	padding: 10px;
	align-items: center;
	border-radius: 5px;
`;

const SendButtonText = styled.Text`
	color: white;
	font-size: 18px;
`;

const SignUpButton = styled.TouchableOpacity`
	margin-top: 20px;
	background-color: gray;
	padding: 10px;
	align-items: center;
	border-radius: 5px;
`;

const SignUpButtonText = styled.Text`
	color: white;
	font-size: 18px;
`;

const ForgetPassword = ({navigation}) => {
	const [email, setEmail] = useState('');

	const handleSend = async () => {
		const response = await userLogin('');
	};

	return (
		<Container>
			<Title>
				Empower{'\n'}Minds{'\n'}Ignite Learning
			</Title>
			<Input placeholder="Email" keyboardType="email-address" italize="none" />

			<SendButton onPress={handleSend}>
				<SendButtonText>Send Email</SendButtonText>
			</SendButton>

			<Terms>
				By logging in you agree to our{' '}
				<Link onPress={() => Linking.openURL('www.killme.com/privacy-policy')}>
					privacy policy
				</Link>{' '}
				and{' '}
				<Link
					onPress={() => Linking.openURL('www.killme.com/terms-of-service')}
				>
					terms of service
				</Link>
			</Terms>
		</Container>
	);
};

export default ForgetPassword;
