import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  height: 1.2px;
`;
