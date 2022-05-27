import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  justify-content: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  margin-top: 30px;
  text-transform: uppercase;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  align-self: center;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  width: 100%;
  height: 48px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.darkGreen};
  border-radius: 8px;
  opacity: 0.8;
`;
