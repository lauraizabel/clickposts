import React from "react";

import theme from "../../theme";
import { Button as ButtonComponent, Text } from "./button-styles";

interface IButton {
  title?: string;
  onPress?: () => void;
  type?: "default" | "danger" | "success";
  height?: number | string;
  width?: number | string;
}

const Button: React.FC<IButton> = ({
  type = "default",
  onPress,
  title = "",
  children,
  height = "60px",
  width = "100%",
}) => {
  const colors = {
    default: theme.colors.tuscanRed,
    danger: theme.colors.danger,
    success: theme.colors.darkGreen,
  };

  return (
    <ButtonComponent
      onPress={onPress}
      color={colors[type]}
      height={height}
      width={width}
    >
      {children ? children : <Text>{title}</Text>}
    </ButtonComponent>
  );
};

export default Button;
