import ContinueLearningCardContainerData from './ContinueLearningCardContainerData';
import ContinueLearningnCard from '../continueLearningCard/continueLearningCard.component';
import {
	ContinueLearningSectionContainer,
	Header,
	Title,
	SeeAll,
	ContinueLearningCardContainer,
} from './continueLearningSection.styles';

const ContinueLearningSection = ({cardsData}) => {
	return (
		<ContinueLearningSectionContainer>
			<Header>
				<Title>Continue Learning</Title>
				<SeeAll>See All</SeeAll>
			</Header>
			<ContinueLearningCardContainer>
				{cardsData.map((item) => (
					<ContinueLearningnCard
						key={item._id}
						image={item.imageUrl}
						course={item.title}
						creator={item.price}
					/>
				))}
			</ContinueLearningCardContainer>
		</ContinueLearningSectionContainer>
	);
};

export default ContinueLearningSection;
