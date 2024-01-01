import Header from '../components/header/header.component';
import CurrentLearningCard from '../components/continueLearningSection/continueLearningSection.component';
import SearchContainer from '../components/searchContainer/searchContainer.component';
import OffersForYouSection from '../components/offersForYouSection/offersForYouSection.component';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from '../App.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useEffect, useState} from 'react';
import {GetCourses} from '../requests/courses';

const getCoursesData = async () => {
	try {
		const response = await GetCourses();
		console.log(response);
		if (response) {
		} else {
			alert('Failed to get data');
		}
	} catch (error) {
		console.error('Login error:', error.message);
		alert('An error occurred during login. Please try again.');
	}
};

const HomePage = () => {
	const [courseData, setCourseData] = useState(null);
	useEffect(() => {
		const response = getCoursesData();
		setCourseData(response);
	}, []);
	return (
		<Container>
			<SafeAreaView>
				<ScrollView style={{height: '100%'}}>
					<Header />
					<SearchContainer />
					<CurrentLearningCard {...courseData} />
					<OffersForYouSection />
				</ScrollView>
			</SafeAreaView>
		</Container>
	);
};

export default HomePage;
