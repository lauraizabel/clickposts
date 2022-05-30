import styled from "styled-components/native";
import theme from "../../theme";

interface IButton {
  color: string;
  height: number | string;
  width: number | string;
}

export const Button = styled.TouchableOpacity<IButton>`
  background-color: ${({ color }) => color};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
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

export const AndroidStyles = {
  container: {
    backgroundColor: theme.colors.lightPurple,
    width: "90%",
    height: "60px",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
};
