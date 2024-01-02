import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./homePage";
import SignUpPage from "./signupPage/signupPage.component";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
