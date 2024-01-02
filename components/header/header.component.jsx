import {Ionicons} from '@expo/vector-icons';
import {
	TitleBar,
	TitleBarLeft,
	BackgroundContainer,
	Avatar,
	TitleContainer,
	Title,
	Name,
} from './header.styles';

const Header = ({firstName, lastName}) => {
	return (
		<TitleBar>
			<TitleBarLeft>
				<BackgroundContainer>
					<Avatar source={require('../../assets/default-user.jpg')} />
				</BackgroundContainer>
				<TitleContainer>
					<Title>Welcome back,</Title>
					<Name>{firstName + ' ' + lastName}</Name>
				</TitleContainer>
			</TitleBarLeft>
			<BackgroundContainer>
				<Ionicons name="notifications-outline" size={20} color={'#E19C97'} />
			</BackgroundContainer>
		</TitleBar>
	);
};

export default Header;
