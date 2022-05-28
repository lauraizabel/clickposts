import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Route } from "@react-navigation/native";

import { User } from "../../../@types/User";
import Layout from "../../../components/layout/layout";

import { getUserById } from "../../../api/users/users.api";

import { Container, TextLarge, Text, Title } from "./show-styles";

interface IShow {
  route: Route<"ShowUser">;
}

const Show: React.FC<IShow> = ({ route }) => {
  const [user, setUser] = useState<User>();

  const fetchUser = async (id: number) => {
    try {
      const response = await getUserById(id);
      setUser(response);
    } catch (error) {
      Alert.alert("Erro", "Erro ao carregar usuário");
    }
  };

  useEffect(() => {
    if (route.params?.id) {
      fetchUser(Number(route.params?.id));
    }
  }, [route]);

  return (
    <Layout>
      <Container>
        <Title>{user?.name}</Title>
        <Text>Username: {user?.username}</Text>
        <TextLarge>Dados</TextLarge>
        <Text>Email: {user?.email}</Text>
        <Text>Phone: {user?.phone}</Text>
        <Text>Website: {user?.website}</Text>
      </Container>
    </Layout>
  );
};

export default Show;
