import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Post } from "../../../@types/Posts";
import { getPosts } from "../../../api/posts/posts.api";

import Layout from "../../../components/layout/layout";
import List from "../../../components/card/card";
import Button from "../../../components/button/button";

import { Container, ContainerButton } from "./home-styles";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

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

  const goToEdit = (id: number) => {
    navigation.navigate("Edit", { id });
  };

  const goToShow = (id: number) => {
    navigation.navigate("Show", { id });
  };

  return (
    <Layout>
      <Container>
        <ContainerButton>
          <Button title="Novo Post" onPress={goToRegister} />
        </ContainerButton>
      </Container>
      <FlatList
        data={posts}
        renderItem={(item) => (
          <List data={item} onClickEdit={goToEdit} onClickShow={goToShow} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </Layout>
  );
};

export default Home;
