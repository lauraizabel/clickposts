import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  margin-left: auto;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.5px;
  font-variant: small-caps;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 24px;
`;

export const Text = styled.Text`
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.lightPurple};
`;

export const TextUser = styled.Text`
  margin-top: 24px;
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightGreen};
  text-decoration: underline;
`;
