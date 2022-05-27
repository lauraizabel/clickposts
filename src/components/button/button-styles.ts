import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  width: 90%;
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: bold;
`;
