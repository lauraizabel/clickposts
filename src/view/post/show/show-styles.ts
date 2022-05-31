import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 0.5px;
  font-variant: small-caps;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.lightPurple};
  font-size: 16px;
`;

export const TextUser = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.liverChestnut};
  text-decoration: underline;
  font-style: italic;
  letter-spacing: 0.5px;
`;

export const ContainerTitle = styled.View`
  margin-bottom: 24px;
`;
