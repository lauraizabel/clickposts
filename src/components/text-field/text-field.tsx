import React from "react";

import { Container, Label, Input } from "./text-field-styles";

interface ITextField {
  label: string;
  onChangeText?: (text: string) => void;
}

const TextField: React.FC<ITextField> = ({ label, onChangeText }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input onChangeText={onChangeText} />
    </Container>
  );
};

export default TextField;
