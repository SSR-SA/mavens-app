import Header from "../components/header/header.component";
import CurrentLearningCard from "../components/continueLearningSection/continueLearningSection.component";
import SearchContainer from "../components/searchContainer/searchContainer.component";
import OffersForYouSection from "../components/offersForYouSection/offersForYouSection.component";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "../App.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { GetCourses } from "../requests/courses";
import { useAuth } from "../context/authContext";
import { GetCategories } from "../requests/categories";

const HomePage = () => {
  const [courseData, setCourseData] = useState([]);
  const [categoriesData, setCategories] = useState([]);
  const { token, user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const res = await GetCourses(token, {});
          res ? setCourseData(res) : alert("Failed to get data");

          const catres = await GetCategories(token, {});
          catres ? setCategories(catres) : alert("Failed to get data");
        }
      } catch (error) {
        console.error("Error fetching courses:", error.message);
        alert("An error occurred while fetching data. Please try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <Header firstName={user.firstName} lastName={user.lastName} />
          <SearchContainer categories={categoriesData} />
          <CurrentLearningCard cardsData={courseData} />
          <OffersForYouSection />
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default HomePage;
