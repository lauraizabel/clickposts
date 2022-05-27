import React from "react";
import { Alert, ListRenderItemInfo } from "react-native";
import { Post } from "../../@types/Posts";
import { deletePost } from "../../api/posts/posts.api";
import Button from "../button/button";
import Divider from "../divider/divider";

import {
  Container,
  SubText,
  Title,
  Content,
  Texts,
  Buttons,
} from "./card-styles";

interface IList {
  data: ListRenderItemInfo<Post>;
}

const List: React.FC<IList> = ({ data }) => {
  const onCancel = () => {
    Alert.alert("Deletar", "Deseja apagar a postagem?", [
      {
        text: "Sim",
        onPress: async () => {
          try {
            await deletePost(Number(data.item.id));
            Alert.alert("Sucesso", "Post deletado com sucesso!");
          } catch (error) {
            Alert.alert("Erro", "Algo deu errado ao tentar deletar o post!");
          }
        },
      },
      {
        text: "Não",
      },
    ]);
  };

  return (
    <Container>
      <Content>
        <Texts>
          <Title>{data.item.title}</Title>
          <SubText>{data.item.body}</SubText>
        </Texts>
        <Buttons>
          <Button title="Editar" />
          <Button title="Excluir" onPress={onCancel} />
        </Buttons>
      </Content>
      <Divider />
    </Container>
  );
};

export default List;
