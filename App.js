import { SafeAreaView, ScrollView, Pressable } from "react-native";

import Header from "./components/header/header.component";
import CurrentLearningCard from "./components/currentLearningCard/currentLearningCard.component";
import SearchContainer from "./components/searchContainer/searchContainer.component";

import { Container } from "./App.styles";

const App = () => {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <Header />
          <SearchContainer />
          <CurrentLearningCard />
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default App;
