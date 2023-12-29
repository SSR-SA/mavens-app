import React, { useState } from "react";
import { Linking, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { userLogin } from "../../requests/user";

import {
  Container,
  ContainerTop,
  ContainerBottom,
  TitleContainer,
  MContainer,
  Title,
  InputContainer,
  ButtonContainer,
  Input,
  ForgotPassword,
  ForgotPasswordText,
  TermsContainer,
  Terms,
  PrivacyLink,
  LoginButton,
  LoginButtonText,
  SignUpButton,
  SignUpButtonText,
} from "./loginPage.styles";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await userLogin("");
    console.log(response);
    // TODO: Store Token
  };

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const navigateForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111313" }}>
      <Container>
        <ContainerTop>
          <TitleContainer>
            {/* <MContainer /> */}
            <Title>
              Empower{"\n"}Minds{"\n"}Ignite Learning
            </Title>
          </TitleContainer>
          <InputContainer>
            <Input placeholder="Email" keyboardType="email-address" italize="none" />
            <Input placeholder="Password" secureTextEntry={true} italize="none" />
            <ForgotPassword onPress={navigateForgetPassword}>
              <ForgotPasswordText>Forgot?</ForgotPasswordText>
            </ForgotPassword>
          </InputContainer>
          <ButtonContainer>
            <LoginButton onPress={handleLogin}>
              <LoginButtonText>Login</LoginButtonText>
            </LoginButton>

            <SignUpButton onPress={navigateToSignUp}>
              <SignUpButtonText>Don't have an account? Sign Up</SignUpButtonText>
            </SignUpButton>
          </ButtonContainer>
        </ContainerTop>

        <ContainerBottom>
          <TermsContainer>
            <Terms>
              By logging in you agree to our{" "}
              <PrivacyLink onPress={() => Linking.openURL("www.killme.com/privacy-policy")}>
                privacy policy
              </PrivacyLink>
              and
              <PrivacyLink onPress={() => Linking.openURL("www.killme.com/terms-of-service")}>
                terms of service
              </PrivacyLink>
            </Terms>
          </TermsContainer>
        </ContainerBottom>
      </Container>
    </SafeAreaView>
  );
};

export default LoginPage;
