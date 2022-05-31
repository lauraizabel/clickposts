import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-top: 20px;
  text-justify: newspaper;
`;

export const SubText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightPurple};
  margin-top: 10px;
`;

export const Content = styled.TouchableOpacity`
  padding: 10px;
  width: 90%;
  margin: 12px 0;
  flex-direction: row;
`;

export const Texts = styled.View`
  width: 70%;
`;
export const Buttons = styled.View`
  width: 30%;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  margin-bottom: 10px;
`;
