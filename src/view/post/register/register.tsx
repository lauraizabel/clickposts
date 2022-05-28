import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import { Select as SelectProps } from "../../../@types/Select";

import { formatSelect } from "../../../utils/format";

import { getUsers } from "../../../api/users/users.api";

import Layout from "../../../components/layout/layout";

import { Container, Title } from "./register-styles";
import { savePost } from "../../../api/posts/posts.api";
import { Alert } from "react-native";
import Form from "../../../components/form/form";
import { Post } from "../../../@types/Posts";

const Register: React.FC = () => {
  const [form, setForm] = useState<Post>({
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
        <Form
          form={form}
          items={users}
          onChangeText={onChangeText}
          onSave={onSave}
          onCancel={onCancel}
          onChangeValueSelect={(value) => {
            onChangeText("userId", value);
          }}
          setItems={setUsers}
        />
      </Container>
    </Layout>
  );
};

export default Register;
