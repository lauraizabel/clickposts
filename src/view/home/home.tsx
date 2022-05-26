import React from "react";
import { Text } from "react-native";
import { Container } from "./home-styles";
import Layout from "../../components/layout/layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <Text>Primeiro app com native!</Text>
    </Layout>
  );
};

export default Home;
