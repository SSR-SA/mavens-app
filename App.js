import { SafeAreaView, ScrollView, Pressable } from "react-native";

import Header from "./components/header/header.component";
import CurrentLearningCard from "./components/continueLearningSection/continueLearningSection.component";
import SearchContainer from "./components/searchContainer/searchContainer.component";
import OffersForYouSection from "./components/offersForYouSection/offersForYouSection.component";

import { Container } from "./App.styles";

const App = () => {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <Header />
          <SearchContainer />
          <CurrentLearningCard />
          <OffersForYouSection />
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default App;
