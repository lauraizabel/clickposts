import React from "react";
import Select from "../select/select";
import TextField from "../text-field/text-field";
import Button from "../button/button";

import {
  Container,
  ContainerButtons,
  ContainerCancelButton,
  ContainerRegisterButton,
  FormContent,
} from "./form-styles";

import { Post } from "../../@types/Posts";
import { Select as ISelect } from "../../@types/Select";

interface IForm {
  form: Post;
  onSave: (post: Post) => void;
  onCancel: () => void;
  onChangeText: (key: string, value: string) => void;
  setItems: React.Dispatch<React.SetStateAction<ISelect[]>>;
  items: ISelect[];
  onChangeValueSelect: (value: string) => void;
}

const Form: React.FC<IForm> = ({
  form,
  onCancel,
  onChangeText,
  onSave,
  items,
  onChangeValueSelect,
  setItems,
}) => {
  return (
    <Container>
      <FormContent>
        <TextField
          label="Título do Post"
          initialValue={form.title}
          onChangeText={(value) => onChangeText("title", value)}
        />
        <TextField
          label="Conteúdo do Post"
          initialValue={form.body}
          onChangeText={(value) => onChangeText("body", value)}
        />
        <Select
          label="Selecione um usuário"
          items={items}
          setItems={setItems}
          value={form.userId?.toString()}
          onChangeValue={onChangeValueSelect}
        />
      </FormContent>
      <ContainerButtons>
        <ContainerRegisterButton>
          <Button title="Adicionar" onPress={() => onSave(form)} />
        </ContainerRegisterButton>
        <ContainerCancelButton>
          <Button title="Cancelar" onPress={onCancel} type="danger" />
        </ContainerCancelButton>
      </ContainerButtons>
    </Container>
  );
};

export default Form;
