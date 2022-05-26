import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${Platform.OS === "android"
    ? `${StatusBar.currentHeight}px`
    : 0};
`;
