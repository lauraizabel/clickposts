import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { Select as SelectProps } from "../../@types/Select";
import { User } from "../../@types/User";

import { formatSelect } from "../../utils/format";

import { getUsers } from "../../api/users/users.api";

import Button from "../../components/button/button";
import Layout from "../../components/layout/layout";
import Select from "../../components/select/select";
import TextField from "../../components/text-field/text-field";

import {
  Container,
  Title,
  FormContent,
  ContainerButtons,
  ContainerRegisterButton,
  ContainerCancelButton,
} from "./register-styles";
import { savePost } from "../../api/posts/posts.api";
import { Alert } from "react-native";

interface IForm {
  title: string;
  body: string;
  userId: number | null;
}

const Register: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    title: "",
    body: "",
    userId: null,
  });

  const [users, setUsers] = useState<SelectProps[]>([]);
  const navigate = useNavigation();

  const onCancel = () => {
    navigate.goBack();
  };

  const onSave = async () => {
    try {
      await savePost(form);
      Alert.alert("Sucesso", "Post salvo com sucesso");
      navigate.goBack();
    } catch (error) {
      Alert.alert("Erro", "Erro ao salvar post");
    }
  };

  const fetchUsers = async () => {
    const fetchedUsers = await getUsers();
    const usersSelect = formatSelect({
      data: fetchedUsers,
      label: "name",
      value: "id",
    });
    setUsers(usersSelect);
  };

  const onChangeText = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout>
      <Container>
        <Title>Novo Post</Title>
        <FormContent>
          <TextField
            label="Título do Post"
            onChangeText={(value) => onChangeText("title", value)}
          />
          <TextField
            label="Conteúdo do Post"
            onChangeText={(value) => onChangeText("body", value)}
          />
          <Select
            label="Selecione um usuário"
            items={users}
            setItems={setUsers}
            value={form.userId?.toString() || ""}
            onChangeValue={(value) => {
              setForm({ ...form, userId: value as number });
            }}
          />
        </FormContent>
        <ContainerButtons>
          <ContainerRegisterButton>
            <Button title="Adicionar" onPress={onSave} />
          </ContainerRegisterButton>
          <ContainerCancelButton>
            <Button title="Cancelar" onPress={onCancel} type="danger" />
          </ContainerCancelButton>
        </ContainerButtons>
      </Container>
    </Layout>
  );
};

export default Register;
