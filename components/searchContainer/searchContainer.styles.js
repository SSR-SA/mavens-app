import { TextInput } from "react-native";
import styled from "styled-components";

export const SearchBoxContainer = styled.View`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-top: 30px;
`;

export const SearchBox = styled.TextInput`
  width: 70%;
  height: 35px;
  background-color: #1d1d1d;
  border-radius: 10px;
`;
