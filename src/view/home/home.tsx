import React from "react";
import { Text } from "react-native";
import { Container } from "./home-styles";
import Header from "../../components/header/header";
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Text>Primeiro app com native!</Text>
      </Container>
    </>
  );
};

export default Home;
