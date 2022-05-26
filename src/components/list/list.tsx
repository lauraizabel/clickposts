import React from "react";
import { View, Text, ListRenderItemInfo } from "react-native";
import { Posts } from "../../@types/Posts";
import Divider from "../divider/divider";

import { Container, SubText, Title, Content } from "./list-styles";

interface IList {
  data: ListRenderItemInfo<Posts>;
}

const List: React.FC<IList> = ({ data }) => {
  return (
    <Container>
      <Content>
        <Title>{data.item.title}</Title>
        <SubText>{data.item.body}</SubText>
      </Content>
      <Divider />
    </Container>
  );
};

export default List;
