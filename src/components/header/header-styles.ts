import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.liverChestnut};
  font-family: ${({ theme }) => theme.fonts.bold};
  letter-spacing: 2px;
  text-transform: uppercase;
`;
