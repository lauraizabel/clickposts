import React from "react";

import { Container, Label, Input } from "./text-field-styles";

interface ITextField {
  label: string;
  onChangeText?: (text: string) => void;
  initialValue?: string;
}

const TextField: React.FC<ITextField> = ({
  label,
  onChangeText,
  initialValue,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input onChangeText={onChangeText} defaultValue={initialValue} />
    </Container>
  );
};

export default TextField;
