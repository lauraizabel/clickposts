import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import FaIcons from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import { Post } from "../../../@types/Posts";
import { getPosts } from "../../../api/posts/posts.api";

import Layout from "../../../components/layout/layout";
import List from "../../../components/card/card";
import Button from "../../../components/button/button";
import TextField from "../../../components/text-field/text-field";

import {
  Container,
  ContainerButtons,
  ContainerTextField,
  ContainerButton,
} from "./home-styles";

import theme from "../../../theme";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState<string>("");

  const navigation = useNavigation();

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
    setFilteredPosts(data);
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

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const filterPosts = () =>
    posts.filter((post) => {
      if (!search) return true;
      const title = post.title.toLowerCase();
      const searchText = search.toLowerCase();
      return title.includes(searchText);
    });

  const onClickSearch = () => {
    if (!search) {
      setFilteredPosts(posts);
      return;
    }
    const filteredPosts = filterPosts();
    setFilteredPosts(filteredPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Container>
        <ContainerTextField>
          <TextField onChangeText={handleSearch} placeholder="Pesquisar" />
        </ContainerTextField>
        <ContainerButtons>
          <ContainerButton>
            <Button onPress={onClickSearch} width={"52px"} height={"52px"}>
              <FaIcons name="search" size={16} color={theme.colors.nyanza} />
            </Button>
          </ContainerButton>
          <ContainerButton>
            <Button onPress={goToRegister} width={"52px"} height={"52px"}>
              <FaIcons name="plus" size={16} color={theme.colors.nyanza} />
            </Button>
          </ContainerButton>
        </ContainerButtons>
      </Container>
      <FlatList
        data={filteredPosts}
        renderItem={(item) => (
          <List data={item} onClickEdit={goToEdit} onClickShow={goToShow} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </Layout>
  );
};

export default Home;
