import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../header/header";
import { Container } from "./layout-styles";

const Layout: React.FC = ({ children }) => {
  return (
    <SafeAreaView>
      <Container>
        <Header />
        <View>{children}</View>
      </Container>
    </SafeAreaView>
  );
};

export default Layout;
