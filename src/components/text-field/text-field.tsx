import React from "react";

import { Container, Label, Input } from "./text-field-styles";

interface ITextField {
  label: string;
  onChangeText?: (text: string) => void;
  initialValue?: string;
  placeholder?: string;
}

const TextField: React.FC<ITextField> = ({
  label,
  onChangeText,
  initialValue,
  placeholder = "",
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input
        onChangeText={onChangeText}
        placeholder={placeholder}
        defaultValue={initialValue}
      />
    </Container>
  );
};

export default TextField;
