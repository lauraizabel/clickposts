import React from "react";
import { View } from "react-native";
import theme from "../../theme";

import { Button as ButtonComponent, Text } from "./button-styles";

interface IButton {
  title: string;
  onPress?: () => void;
  color?: string;
}

const Button: React.FC<IButton> = ({
  color = theme.colors.white,
  onPress,
  title,
}) => {
  return (
    <ButtonComponent onPress={onPress}>
      <Text>{title}</Text>
    </ButtonComponent>
  );
};

export default Button;
