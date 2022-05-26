import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { Container } from "./home-styles";
import Layout from "../../components/layout/layout";
import { Posts } from "../../@types/Posts";
import { getPosts } from "../../api/posts/posts";
import List from "../../components/list/list";

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
      <FlatList
        data={posts}
        renderItem={(item) => <List data={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </Layout>
  );
};

export default Home;
