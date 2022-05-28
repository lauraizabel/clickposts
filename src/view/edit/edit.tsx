import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Route } from "@react-navigation/native";

import { Post } from "../../@types/Posts";
import { getPostById } from "../../api/posts/posts.api";

import Layout from "../../components/layout/layout";

import { Container } from "./edit-styles";

interface IEdit {
  route: Route<"Edit">;
}

const Edit: React.FC<IEdit> = ({ route }) => {
  const [form, setForm] = useState<Post>({
    id: 0,
    title: "",
    body: "",
    userId: 0,
  });

  const fetchPost = async (id: number) => {
    const data = await getPostById(id);
    setForm(data);
    console.log(data);
  };

  useEffect(() => {
    if (route.params?.id) {
      fetchPost(Number(route.params?.id));
    }
  }, [route]);

  return (
    <Layout>
      <Container>
        <Text>Edit</Text>
      </Container>
    </Layout>
  );
};

export default Edit;
