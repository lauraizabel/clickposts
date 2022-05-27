import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Posts } from "../../@types/Posts";
import { getPosts } from "../../api/posts/posts.api";

import Layout from "../../components/layout/layout";
import List from "../../components/list/list";
import Button from "../../components/button/button";

import { Container, ContainerButton } from "./home-styles";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <Layout>
      <Container>
        <ContainerButton>
          <Button title="Adicionar Postagem" onPress={goToRegister} />
        </ContainerButton>
      </Container>
      <FlatList
        data={posts}
        renderItem={(item) => <List data={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </Layout>
  );
};

export default Home;
