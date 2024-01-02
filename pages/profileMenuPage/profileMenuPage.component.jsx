import React from 'react';
import {SafeAreaView} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {
	LogoutButton,
	LogoutButtonText,
	ProfileContainer,
	ProfileInfoContainer,
	UserProfileIcon,
	ProfileInfoText,
	ProfileSectionContainer,
	ProfileTop,
	SectionText,
} from './profileMenuPage.styles';

const backgroundColor = '#111313';

const ProfileMenuPage = ({navigation}) => {
	const user = {
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@example.com',
		profileImage: '../../assets/default-user.jpg',
	};
	const sections = [
		{icon: 'user', text: 'Profile'},
		{icon: 'chalkboard-teacher', text: 'Become a teacher'},
		{icon: 'cog', text: 'Settings'},
	];

	const handleSectionClick = (section) => {
		alert(`Clicked on ${section.text}`);
	};

	const handleLogout = () => {
		alert('Logout functionality goes here');
	};

	return (
		<SafeAreaView style={{flex: 1, backgroundColor}}>
			<ProfileContainer>
				<ProfileTop>
					<ProfileInfoContainer>
						{/* <UserProfileIcon source={user.profileImage} /> */}
						<ProfileInfoText>{`${user.firstName} ${user.lastName}`}</ProfileInfoText>
						<ProfileInfoText>{user.email}</ProfileInfoText>
					</ProfileInfoContainer>
					{sections.map((section, index) => (
						<ProfileSectionContainer
							key={index}
							onPress={() => handleSectionClick(section)}
						>
							<FontAwesome5 name={section.icon} size={24} color="#fcf9ff" />
							<SectionText>{section.text}</SectionText>
						</ProfileSectionContainer>
					))}
					<LogoutButton onPress={handleLogout}>
						<LogoutButtonText>Logout</LogoutButtonText>
					</LogoutButton>
				</ProfileTop>
			</ProfileContainer>
		</SafeAreaView>
	);
};

export default ProfileMenuPage;
