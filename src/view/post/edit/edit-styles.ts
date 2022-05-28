import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  height: 92%;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
