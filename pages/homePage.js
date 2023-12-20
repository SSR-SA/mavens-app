import Header from '../components/header/header.component';
import CurrentLearningCard from '../components/continueLearningSection/continueLearningSection.component';
import SearchContainer from '../components/searchContainer/searchContainer.component';
import OffersForYouSection from '../components/offersForYouSection/offersForYouSection.component';
import {ScrollView} from 'react-native-gesture-handler';

const HomePage = () => {
	return (
		<View>
			<Header />
			<SearchContainer />
			<CurrentLearningCard />
			<OffersForYouSection />
		</View>
	);
};

export default HomePage;
