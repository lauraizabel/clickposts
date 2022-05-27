import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { Posts } from "../../@types/Posts";
import { getPosts } from "../../api/posts/posts";

import Layout from "../../components/layout/layout";
import List from "../../components/list/list";
import Button from "../../components/button/button";

import { Container, ContainerButton } from "./home-styles";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Container>
        <ContainerButton>
          <Button title="Adicionar Postagem" />
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
