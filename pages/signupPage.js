import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Linking } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #111313;
  padding-horizontal: 30px;
  padding-top: 50px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: gray;
  border-radius: 5px;
  padding-horizontal: 10px;
  padding-vertical: 5px;
  margin-bottom: 20px;
`;

const ForgotPassword = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ForgotPasswordText = styled.Text`
  color: blue;
  font-size: 16px;
`;

const Terms = styled.Text`
  font-size: 14px;
  color: gray;
`;

const Link = styled.Text`
  color: blue;
  font-weight: bold;
`;

const SignupPage = () => {
  return (
    <Container>
      <Title>
        Empower{"\n"}Minds{"\n"}Ignite Learning
      </Title>
      <Input placeholder="First Name" italize="none" />
      <Input placeholder="Last Name" italize="none" />
      <Input placeholder="Email" keyboardType="email-address" italize="none" />
      <Input placeholder="Password" secureTextEntry={true} italize="none" />

      <Button
        title="Sign Up"
        onPress={() => {
          alert("Logged in successfully!");
        }}
      />
      <Terms>
        By logging in you agree to our{" "}
        <Link onPress={() => Linking.openURL("www.killme.com/privacy-policy")}>privacy policy</Link>{" "}
        and{" "}
        <Link onPress={() => Linking.openURL("www.killme.com/terms-of-service")}>
          terms of service
        </Link>
      </Terms>
    </Container>
  );
};

export default SignupPage;
