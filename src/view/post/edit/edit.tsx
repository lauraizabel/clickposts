import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { Route, useNavigation } from "@react-navigation/native";

import { Post } from "../../../@types/Posts";
import { Select } from "../../../@types/Select";
import { getPostById, updatePost } from "../../../api/posts/posts.api";

import Layout from "../../../components/layout/layout";

import { Container, Title } from "./edit-styles";
import { getUsers } from "../../../api/users/users.api";
import { formatSelect } from "../../../utils/format";
import Form from "../../../components/form/form";

interface IEdit {
  route: Route<"Edit">;
}

const Edit: React.FC<IEdit> = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Select[]>([]);
  const [form, setForm] = useState<Post>({
    id: 0,
    title: "",
    body: "",
    userId: 0,
  });
  const navigate = useNavigation();

  const fetchPost = async (id: number) => {
    const data = await getPostById(id);
    setForm(data);
    setLoading(false);
  };

  const onCancel = () => {
    navigate.goBack();
  };

  const onSave = async () => {
    try {
      await updatePost(form);
      Alert.alert("Sucesso", "Alterações salvas com sucesso");
      navigate.goBack();
    } catch (error) {
      Alert.alert("Erro", "Erro ao salvar alterações do post");
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
    if (route.params?.id) {
      fetchPost(Number(route.params?.id));
    }
  }, [route]);

  return (
    <Layout>
      <Container>
        <Title>Editar Post</Title>
        {!loading && (
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
        )}
      </Container>
    </Layout>
  );
};

export default Edit;
