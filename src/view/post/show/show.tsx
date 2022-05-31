import React, { useEffect, useState } from "react";
import { Route, useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import { ShowPost } from "../../../@types/Posts";
import { getPostById } from "../../../api/posts/posts.api";
import { getUserById } from "../../../api/users/users.api";

import {
  Container,
  Text,
  TextUser,
  Title,
  ContainerTitle,
} from "./show-styles";
import Layout from "../../../components/layout/layout";
import Divider from "../../../components/divider/divider";

interface IShow {
  route: Route<"Show">;
}

const Show: React.FC<IShow> = ({ route }) => {
  const navigation = useNavigation();
  const [post, setPost] = useState<ShowPost>();

  const fetchData = async (id: number) => {
    try {
      const responsePost = await getPostById(id);
      const responseUser = await getUserById(Number(responsePost.userId));
      setPost({
        ...responsePost,
        user: responseUser,
      });
    } catch (error) {
      Alert.alert("Erro", "Erro ao carregar post");
    }
  };

  const goToShowUser = () => {
    navigation.navigate("ShowUser", {
      id: post?.userId,
    });
  };

  useEffect(() => {
    if (route.params?.id) {
      fetchData(route.params?.id);
    }
  }, [route]);

  return (
    <Layout>
      <Container>
        <ContainerTitle>
          <Title>{post?.title}</Title>
          <TextUser onPress={goToShowUser}>{post?.user.name}</TextUser>
        </ContainerTitle>
        <Divider />
        <Text>{post?.body}</Text>
        <Divider />
      </Container>
    </Layout>
  );
};

export default Show;
