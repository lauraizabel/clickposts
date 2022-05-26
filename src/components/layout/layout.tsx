import React from "react";
import { View } from "react-native";

import Header from "../header/header";
import { Container } from "./layout-styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <View>{children}</View>
    </Container>
  );
};

export default Layout;
