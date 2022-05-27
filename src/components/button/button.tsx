import React from "react";
import { Platform, View } from "react-native";
import theme from "../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button as ButtonComponent, Text } from "./button-styles";

interface IButton {
  title: string;
  onPress?: () => void;
  type?: "default" | "danger" | "success";
}

const Button: React.FC<IButton> = ({ type = "default", onPress, title }) => {
  const colors = {
    default: theme.colors.lightPurple,
    danger: theme.colors.danger,
    success: theme.colors.darkGreen,
  };

  return (
    <ButtonComponent onPress={onPress} color={colors[type]}>
      <Text>{title}</Text>
    </ButtonComponent>
  );
};

export default Button;
