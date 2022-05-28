import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  margin: 24px auto;
  height: 80%;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 8px;
`;
export const Text = styled.Text`
  margin-bottom: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightPurple};
  font-weight: 600;
`;

export const TextLarge = styled.Text`
  margin-bottom: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
`;
