import styled from "styled-components/native";

export const TitleBar = styled.View`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const TitleBarLeft = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TitleContainer = styled.View`
  /* NOTHING FOR NOW */
`;

export const BackgroundContainer = styled.View`
  background-color: #1d1d1d;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 50px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #ffeceb;
  font-weight: 500;
`;

export const Name = styled.Text`
  font-size: 16px;
  color: #ffeceb;
  font-weight: 500;
`;
